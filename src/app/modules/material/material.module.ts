import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { MaterialComponent } from '../../components/material/material.component';
import { DialogComponent } from '../../components/material/dialog/dialog.component';



@NgModule({
  declarations: [
    MaterialComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    MaterialComponent
  ]
})
export class MaterialModule { }
