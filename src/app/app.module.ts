import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { SystemModule } from './system/system.module';
import { AdminPageModule } from './admin-page/admin-page.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    SharedModule,
    SystemModule,
    AdminPageModule
  ],
  providers: [
    { provide: BUCKET, useValue: 'gs://book-of-recipes-53f5a.appspot.com' }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
