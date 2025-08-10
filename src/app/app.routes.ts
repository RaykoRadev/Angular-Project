import { Routes } from '@angular/router';
import { Home } from './features/home/home.component';
import { LoginForm } from './auth/login/login-form.component';
import { RegisterForm } from './auth/register-form/register-form.component';
import { CreateCard } from './features/create-card/create-card.component';
import { ErrorPage } from './layout/error-page/error-page.component';
import { CategoryComponent } from './features/category.component/category.component';
import { routeGuard } from './core/guards/route.guard';
import { EditCard } from './features/edit-card/edit-card.component';
import { Details } from './features/details/details.component';
import { ContactUs } from './layout/contact-us/contact-us.component';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'login', component: LoginForm },
  { path: 'register', component: RegisterForm },
  { path: 'contactUs', component: ContactUs },

  {
    path: 'category/:category',
    loadComponent: () =>
      import(
        './features/category/custom-category/custom-category.component'
      ).then((c) => c.CustomCategory),
  },

  { path: 'create', component: CreateCard },
  {
    path: 'me',
    canActivate: [routeGuard],
    loadComponent: () =>
      import('./auth/user-profile/user-profile.component').then(
        (c) => c.UserProfileComponent
      ),
  },
  {
    path: 'details/:card._id',
    loadComponent: () =>
      import('./features/details/details.component').then((c) => c.Details),
  },
  {
    path: 'edit/:card._id',
    loadComponent: () =>
      import('./features/edit-card/edit-card.component').then(
        (c) => c.EditCard
      ),
  },

  //! always in the bottom
  // { path: '**', redirectTo: '/home' },
  { path: '**', component: ErrorPage },
];
