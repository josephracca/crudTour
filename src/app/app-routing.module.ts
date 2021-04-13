import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoggedInComponent } from './pages/logged-in/logged-in.component';
import { AuthguardService } from './services/guard/authguard.service';

const routes: Routes = [
  {path: 'loggedin', component: LoggedInComponent, canActivate: [AuthguardService] },
  {
    path: '**', component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


