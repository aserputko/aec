import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserRole } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'aec-user-list',
    template: `
        <h2>User List App</h2>

        <div class="aec-row">
            <mat-form-field appearance="outline">
                <mat-label>Sort</mat-label>
                <mat-select #sortSelect (selectionChange)="sort(sortSelect.value)">
                    <mat-option value="0">From A to Z</mat-option>
                    <mat-option value="1">From Z to A</mat-option>
                </mat-select>
            </mat-form-field>

            <mat-form-field appearance="outline">
                <mat-label>Search</mat-label>
                <input matInput placeholder="Search" #searchInput (keydown.enter)="search(searchInput.value)" />
                <mat-icon matSuffix (click)="search(searchInput.value)">search</mat-icon>
            </mat-form-field>
        </div>

        <div class="aec-row">
            <mat-form-field appearance="outline">
                <mat-label>Username</mat-label>
                <input matInput placeholder="Username" [(ngModel)]="username" />
            </mat-form-field>

            <mat-form-field appearance="outline">
                <mat-label>Name</mat-label>
                <input matInput placeholder="Name" [(ngModel)]="name" />
            </mat-form-field>

            <mat-form-field appearance="outline">
                <mat-label>User Role</mat-label>
                <mat-select [(ngModel)]="role">
                    <mat-option value="Admin">Admin</mat-option>
                    <mat-option value="User">User</mat-option>
                </mat-select>
            </mat-form-field>

            <button mat-raised-button color="primary" (click)="addUser()">Add</button>
        </div>

        <mat-selection-list #userList [style.width.%]="100">
            <mat-list-option *ngFor="let user of users$ | async; let index = index" [class.aec-bg-gray]="index % 2">
                <div matLine>
                    <span class="aec-item">{{ user.username }}</span>
                    <span class="aec-item">{{ user.name }}</span>
                    <span *ngIf="user.role === 'Admin'" class="aec-item">{{ user.role }}</span>
                </div>
            </mat-list-option>
        </mat-selection-list>
        <p>Options selected: {{ userList.selectedOptions.selected.length }}</p>
    `,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
            }
            h2 {
                text-align: center;
            }
            .aec-item {
                width: 200px;
                display: inline-block;
            }
            .aec-bg-gray {
                background-color: #efefef;
            }
            .aec-row {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-top: 20px;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
    constructor(private userListService: UserService) {}

    users$: Observable<User[]>;

    username: string;
    name: string;
    role: UserRole;

    ngOnInit(): void {
        this.users$ = this.userListService.getUsers();
    }

    sort(direction: string): void {
        this.userListService.sortDirection(direction);
    }

    search(value: string): void {
        this.userListService.search(value);
    }

    addUser(): void {
        this.userListService.addUser(this.username, this.name, this.role);
    }
}
