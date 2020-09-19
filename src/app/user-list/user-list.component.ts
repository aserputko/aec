import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserListService } from './user-list.service';

@Component({
    selector: 'aec-user-list',
    template: `
        <h2>User List App</h2>
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
                padding-right: 8px;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
    constructor(private userListService: UserListService) {}

    users$: Observable<User[]>;

    ngOnInit(): void {
        this.users$ = this.userListService.getUsers();
    }
}
