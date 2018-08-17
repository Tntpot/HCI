import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { SuccessComponent } from './success/success.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  {
    path: 'booking',
    component: BookingComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: FormComponent
      },
      {
        path: 'success',
        component: SuccessComponent
      },
      {
        path: 'error',
        component: FormErrorComponent
      }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ErrorComponent,
    AboutComponent,
    NavItemComponent,
    BookingComponent,
    ContactComponent,
    FormComponent,
    SuccessComponent,
    FormErrorComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatFormFieldModule,
    FormsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
