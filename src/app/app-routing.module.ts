import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';

const routes: Routes = [
  { path: '', component:LoginComponent},


  { path: 'login', component: LoginComponent },
  { path: 'home', component: LandingPageComponent},
  { path: 'quote-generator', component:QuoteGeneratorComponent}

  // {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
