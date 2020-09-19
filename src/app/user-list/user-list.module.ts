import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { UserListComponent } from './user-list.component';

@NgModule({
    declarations: [UserListComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatListModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
    ],
    exports: [UserListComponent],
})
export class UserListModule {}
