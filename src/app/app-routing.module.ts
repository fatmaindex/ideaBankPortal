import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { IdeaDetailsComponent } from './components/idea-details/idea-details.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'landing', component:LandingComponent ,canActivate:[AuthGuard]},
  { path: 'form', component: FormComponent,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'ideaDetails/:ideaID', component: IdeaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
