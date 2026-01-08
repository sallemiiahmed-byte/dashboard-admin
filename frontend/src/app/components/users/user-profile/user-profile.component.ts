import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UsersService, User } from '../../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: User | null = null;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.isLoading = true;
    this.usersService.getProfile().subscribe({
      next: (user) => {
        this.user = user;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.snackBar.open('Erreur lors du chargement du profil', 'Fermer', {
          duration: 3000,
        });
      },
    });
  }

  getInitials(): string {
    if (!this.user) return '';
    return `${this.user.firstName.charAt(0)}${this.user.lastName.charAt(0)}`.toUpperCase();
  }

  formatDate(date: string | undefined): string {
    if (!date) return 'N/A';
    return new Date(date).toLocaleString('fr-FR');
  }

  getRoleLabel(role: string): string {
    return role === 'admin' ? 'Administrateur' : 'Utilisateur';
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'active':
        return 'Actif';
      case 'inactive':
        return 'Inactif';
      case 'suspended':
        return 'Suspendu';
      default:
        return status;
    }
  }
}

