import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaComponent, DialogOverviewExampleDialog } from './marca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MarcaRoutingModule} from './marca-routing.module';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatDialogModule,
  MatSelectModule} from '@angular/material';
import { MarcaFormComponent } from './marca-form/marca-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarcaRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
  ],
  entryComponents:[
    DialogOverviewExampleDialog
  ],
  declarations: [
    MarcaComponent,
    DialogOverviewExampleDialog,
    MarcaFormComponent,
  ]
})
export class MarcaModule { }
