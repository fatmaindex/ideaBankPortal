import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { IdeaDetailsComponent } from './components/idea-details/idea-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'landing', component:LandingComponent },
  { path: 'form', component: FormComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ideaDetails/:ideaID', component: IdeaDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
