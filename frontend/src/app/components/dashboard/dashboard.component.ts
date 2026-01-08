import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsersService, UserStats } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  stats: UserStats | null = null;
  currentUser: any = null;
  isLoading = true;

  constructor(
    public authService: AuthService,
    private usersService: UsersService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.loadStats();
  }

  loadStats(): void {
    this.usersService.getStats().subscribe({
      next: (stats) => {
        this.stats = stats;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.snackBar.open('Erreur lors du chargement des statistiques', 'Fermer', {
          duration: 3000,
        });
      },
    });
  }

  navigateToUsers(): void {
    this.router.navigate(['/users']);
  }
}

