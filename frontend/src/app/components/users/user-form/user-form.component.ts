import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService, User, CreateUserDto, UpdateUserDto } from '../../../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  isEditMode = false;
  hidePassword = true;
  isLoading = false;

  roles = [
    { value: 'user', label: 'Utilisateur' },
    { value: 'admin', label: 'Administrateur' },
  ];

  statuses = [
    { value: 'active', label: 'Actif' },
    { value: 'inactive', label: 'Inactif' },
    { value: 'suspended', label: 'Suspendu' },
  ];

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private dialogRef: MatDialogRef<UserFormComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { user: User | null },
  ) {
    this.isEditMode = !!data.user;
    this.userForm = this.createForm();
  }

  ngOnInit(): void {
    if (this.isEditMode && this.data.user) {
      this.userForm.patchValue({
        email: this.data.user.email,
        firstName: this.data.user.firstName,
        lastName: this.data.user.lastName,
        role: this.data.user.role,
        status: this.data.user.status,
        phone: this.data.user.phone || '',
        bio: this.data.user.bio || '',
      });
      this.userForm.get('password')?.clearValidators();
      this.userForm.get('password')?.updateValueAndValidity();
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [this.isEditMode ? '' : '', this.isEditMode ? [] : [Validators.required, Validators.minLength(6)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      role: ['user', [Validators.required]],
      status: ['active', [Validators.required]],
      phone: [''],
      bio: [''],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.isLoading = true;
      const formValue = this.userForm.value;

      if (this.isEditMode && this.data.user) {
        const updateData: UpdateUserDto = { ...formValue };
        if (!updateData.password) {
          delete updateData.password;
        }

        this.usersService.updateUser(this.data.user.id, updateData).subscribe({
          next: () => {
            this.isLoading = false;
            this.snackBar.open('Utilisateur modifié avec succès', 'Fermer', {
              duration: 3000,
            });
            this.dialogRef.close(true);
          },
          error: (error) => {
            this.isLoading = false;
            this.snackBar.open(
              error.error?.message || 'Erreur lors de la modification',
              'Fermer',
              { duration: 5000 },
            );
          },
        });
      } else {
        const createData: CreateUserDto = formValue;
        this.usersService.createUser(createData).subscribe({
          next: () => {
            this.isLoading = false;
            this.snackBar.open('Utilisateur créé avec succès', 'Fermer', {
              duration: 3000,
            });
            this.dialogRef.close(true);
          },
          error: (error) => {
            this.isLoading = false;
            this.snackBar.open(
              error.error?.message || 'Erreur lors de la création',
              'Fermer',
              { duration: 5000 },
            );
          },
        });
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}

