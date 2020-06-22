import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './main-layout/pages/main-layout.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './main-layout/components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { AsideMenuComponent } from './main-layout/components/aside-menu/aside-menu.component';
import { SystemModule } from './system/system.module';
import { AdminPageModule } from './admin-page/admin-page.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import {BasketModalComponent} from './main-layout/components/basket-modal/basket-modal.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    AsideMenuComponent,
    BasketModalComponent
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
  bootstrap: [MainLayoutComponent]
})
export class AppModule { }
