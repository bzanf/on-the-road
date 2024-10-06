import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app/core/presentation/pages/main-page/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
