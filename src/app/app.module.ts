import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { CompareValidatorDirective } from './compare-validator.directive';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    CompareValidatorDirective,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'profile', component: ProfileComponent}
    ]),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
