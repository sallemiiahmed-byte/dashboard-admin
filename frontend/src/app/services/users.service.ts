import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  status: string;
  phone?: string;
  bio?: string;
  avatar?: string;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserStats {
  total: number;
  active: number;
  inactive: number;
  admins: number;
  users: number;
}

export interface CreateUserDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: string;
  status?: string;
  phone?: string;
  bio?: string;
}

export interface UpdateUserDto {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  status?: string;
  phone?: string;
  bio?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }

  getProfile(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/profile`);
  }

  createUser(user: CreateUserDto): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  updateUser(id: string, user: UpdateUserDto): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${id}`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }

  getStats(): Observable<UserStats> {
    return this.http.get<UserStats>(`${this.apiUrl}/users/stats`);
  }
}

