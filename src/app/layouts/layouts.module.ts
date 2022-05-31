import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';
import { AuthAdminComponent } from './auth-admin/auth-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { EmailComponent } from './email/email.component';








@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserLayoutComponent,
    FrontLayoutComponent,
    AuthAdminComponent,
    AuthUserComponent,
    RegisterComponent,
    ResetpasswordComponent,
    EmailComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgToastModule



  ]
})
export class LayoutsModule { }
