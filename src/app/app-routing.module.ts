import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Home',
    },
    component: HomeComponent,
  },
  {
    path: 'profile',
    data: {
      title: 'Profile',
    },
    component: ProfileComponent,
  },
  {
    path: 'dashboard',
    data: {
      title: 'Dashboard',
    },
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
