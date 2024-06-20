import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },

  {
    path: 'signup',
    component: SignupComponent,
  },

  {
    path: 'signup2',
    component: Signup2Component,
  },
];
