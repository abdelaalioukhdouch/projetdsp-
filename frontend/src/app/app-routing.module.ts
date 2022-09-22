import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipateComponent } from 'src/components/participate/participate';
import { CreateProfileComponent } from 'src/components/profile/create-profile/create-profile.component';
import { AddUserComponent } from 'src/components/user/add-user/add-user.component';
import { UserDetailComponent } from 'src/components/user/detail-detail/detail-detail.component';
import { UsersListComponent } from 'src/components/user/users-list/users-list.component';
import { AuthGuard } from 'src/services/auth-guard.service';
import { ContactView } from 'src/views/contact/contact.view';
import { LegalsInformations } from 'src/views/legals-informations/legals-informations';
import { PrivacyPolicy } from 'src/views/privacy-policy/privacy-policy.view';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes =[
  { path: 'home', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'legals-informations', component: LegalsInformations },
  { path: 'participate', component: ParticipateComponent },
  { path: 'contact', component: ContactView },
  { path: 'profile', component: CreateProfileComponent,canActivate: [AuthGuard] },


  { path: '', pathMatch: 'full', redirectTo: 'add-user' },
  { path: 'users-list', component: UsersListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user/:id', component: UserDetailComponent },

  //{ path: "", component: HomeComponent },
  { path: "login", component: FooterComponent },
  { path: "signup", component: NavbarComponent },
  { path: "**", redirectTo: "" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
