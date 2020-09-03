import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { HttpClientModule } from '@angular/common/http'

import { LoanService } from './service/loan.service';

import { Routes, RouterModule} from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

// // New routes for search
const routes: Routes = [
  {path: 'loans/:id', component: LoanListComponent},
  //{path: 'category/:id', component: LoanListComponent},
  //{path: 'category', component: LoanListComponent},
  {path: 'loans', component: LoanListComponent},
  {path: '', redirectTo: '/loans', pathMatch: 'full'},
  {path: '**', redirectTo: '/loans', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoanListComponent,
    SearchComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
