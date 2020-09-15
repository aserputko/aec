import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { UserListComponent } from './user-list.component';

@NgModule({
    declarations: [UserListComponent],
    imports: [CommonModule, MatListModule],
    exports: [UserListComponent],
})
export class UserListModule {}
