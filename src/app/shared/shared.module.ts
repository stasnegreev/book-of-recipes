import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { RatingStarsDirective } from './directives/rating-stars.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { RatingFieldComponent } from '../UI/rating-field/rating-field.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    RatingStarsDirective,
    RatingFieldComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MaterialFileInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatChipsModule,
    MatTabsModule,
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MaterialFileInputModule,
    MatChipsModule,
    MatChipsModule,
    RatingStarsDirective,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatMenuModule,
    RatingFieldComponent,
    MatTabsModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } }
  ]
})
export class SharedModule {
}
