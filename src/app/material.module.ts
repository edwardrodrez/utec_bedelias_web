import { NgModule, NO_ERRORS_SCHEMA }      from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatStepperModule} from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgxChartsModule } from '@swimlane/ngx-charts';
const myModule = [
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatTableModule,
  MatListModule,
  MatToolbarModule,
  MatDividerModule,
  MatButtonToggleModule,
  FormsModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule, 
  MatTooltipModule,
  CarouselModule,
  MatStepperModule,
  ReactiveFormsModule,
  MatRadioModule, 
  MatSnackBarModule,
  MatAutocompleteModule,
  NgxChartsModule ,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule,myModule],
  providers: [  
    MatDatepickerModule,  
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  exports: [myModule]
})
export class MaterialModule { }
