import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService, User } from '../../../services/users.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = [
    'avatar',
    'name',
    'email',
    'role',
    'status',
    'lastLogin',
    'actions',
  ];
  dataSource = new MatTableDataSource<User>([]);
  searchTerm = '';
  selectedRole = 'all';
  selectedStatus = 'all';
  isLoading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = this.customFilterPredicate;
  }

  loadUsers(): void {
    this.isLoading = true;
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.dataSource.data = users;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.snackBar.open('Erreur lors du chargement des utilisateurs', 'Fermer', {
          duration: 3000,
        });
      },
    });
  }

  customFilterPredicate = (data: User, filter: string): boolean => {
    const searchStr = filter.toLowerCase();
    const name = `${data.firstName} ${data.lastName}`.toLowerCase();
    const email = data.email.toLowerCase();
    const role = data.role.toLowerCase();
    const status = data.status.toLowerCase();

    const matchesSearch = name.includes(searchStr) || email.includes(searchStr);
    const matchesRole = this.selectedRole === 'all' || data.role === this.selectedRole;
    const matchesStatus = this.selectedStatus === 'all' || data.status === this.selectedStatus;

    return matchesSearch && matchesRole && matchesStatus;
  };

  applyFilter(): void {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }

  onRoleFilterChange(): void {
    this.applyFilter();
  }

  onStatusFilterChange(): void {
    this.applyFilter();
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '600px',
      data: { user: null },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadUsers();
      }
    });
  }

  openEditDialog(user: User): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '600px',
      data: { user },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadUsers();
      }
    });
  }

  deleteUser(user: User): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer ${user.firstName} ${user.lastName}?`)) {
      this.usersService.deleteUser(user.id).subscribe({
        next: () => {
          this.snackBar.open('Utilisateur supprimé avec succès', 'Fermer', {
            duration: 3000,
          });
          this.loadUsers();
        },
        error: () => {
          this.snackBar.open('Erreur lors de la suppression', 'Fermer', {
            duration: 3000,
          });
        },
      });
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'active':
        return 'primary';
      case 'inactive':
        return 'warn';
      case 'suspended':
        return 'accent';
      default:
        return '';
    }
  }

  getRoleIcon(role: string): string {
    return role === 'admin' ? 'admin_panel_settings' : 'person';
  }

  getInitials(user: User): string {
    return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
  }

  formatDate(date: string | undefined): string {
    if (!date) return 'Jamais';
    return new Date(date).toLocaleDateString('fr-FR');
  }
}

