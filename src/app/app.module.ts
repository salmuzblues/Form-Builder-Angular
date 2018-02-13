import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { RegistrationReactiveFormComponent } from './registration-reactive-form/registration-reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
