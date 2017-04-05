import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExampleFormComponent } from './forms/example-form.component';

const appRoutes: Routes = [
  { path: 'forms', component: ExampleFormComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleFormComponent,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: location.pathname }, // This is specifically for Plunker's baseURL: run.plunkr.co
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
