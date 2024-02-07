import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule), importProvidersFrom(CommonModule)],
}).catch((err) => console.error(err));
