import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modulos/login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './modulos/admin/admin.component';
import { SillasComponent } from './modulos/sillas/sillas.component';
import { RegisterComponent } from './modulos/register/register.component';
import { IndexComponent } from './modulos/index/index.component';
import { ReservaComponent } from './modulos/reserva/reserva.component';
import { EditComponent } from './modulos/edit/edit.component';
import { LoginadminComponent } from './modulos/loginadmin/loginadmin.component';



@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      AdminComponent,
      SillasComponent,
      RegisterComponent,
      IndexComponent,
      ReservaComponent,
      EditComponent,
      LoginadminComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      RouterModule.forRoot([
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'admin', component: AdminComponent },
          { path: 'sillas', component: SillasComponent },
          { path: 'index', component: IndexComponent },
          { path: 'reserva', component: ReservaComponent },
          { path: 'edit', component: EditComponent },
          { path: 'loginadmin', component: LoginadminComponent },
          { path: '', redirectTo: '/index', pathMatch: 'full' },
      ]),
      RouterOutlet
  ]
})

export class AppModule {
}
