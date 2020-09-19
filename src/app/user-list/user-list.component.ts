import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
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

            <button mat-raised-button color="primary" class="aec-btn" (click)="addUser()">Add</button>
        </div>

        <ng-container *ngIf="users$ | async as users">
            <ng-container *ngIf="users.length > 0; then userListBlock; else emptyListBlock"> </ng-container>

            <ng-template #userListBlock>
                <mat-selection-list #userList [style.width.%]="100">
                    <mat-list-option
                        *ngFor="let user of users; let index = index"
                        [class.aec-bg-gray]="index % 2"
                        [value]="user"
                    >
                        <div matLine>
                            <span class="aec-item">{{ user.username }}</span>
                            <span class="aec-item">{{ user.name }}</span>
                            <span *ngIf="user.role === 'Admin'" class="aec-item">{{ user.role }}</span>
                        </div>
                    </mat-list-option>
                </mat-selection-list>

                <div class="aec-row aec-align-items-center">
                    <p>Options selected: {{ userList.selectedOptions.selected.length }}</p>
                    <button
                        mat-raised-button
                        color="warn"
                        class="aec-btn"
                        (click)="removeUsers(userList.selectedOptions.selected)"
                    >
                        Remove
                    </button>
                </div>
            </ng-template>

            <ng-template #emptyListBlock>
                <div class="aec-empty-list">No Users Found</div>
            </ng-template>
        </ng-container>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
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
            .aec-align-items-center {
                align-items: center;
            }
            .aec-btn {
                height: 51px;
                margin-top: 4px;
                width: 100px;
            }
            .aec-empty-list {
                height: 300px;
                font-weight: bold;
                font-size: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
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

    removeUsers(selectedOptions: MatListOption[]): void {
        const userIds = selectedOptions.map((matListOption) => matListOption.value.id);
        this.userListService.removeUsers(userIds);
    }
}
