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
import { AdminModule } from './admin-page/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { SearchInputComponent } from './UI/search-input/search-input.component';
import { SearchResultViewComponent } from './UI/search-result-view/search-result-view.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    AsideMenuComponent,
    SearchInputComponent,
    SearchResultViewComponent,
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
    AdminModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    { provide: BUCKET, useValue: 'gs://book-of-recipes-53f5a.appspot.com' }
  ],
  bootstrap: [MainLayoutComponent]
})
export class AppModule { }
