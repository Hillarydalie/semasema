import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemaComponent } from './sema/sema.component';
import { SemaDescriptionComponent } from './sema-description/sema-description.component';
import { SemaFormComponent } from './sema-form/sema-form.component';
import { SemaDatecountPipe } from './sema-datecount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SemaComponent,
    SemaDescriptionComponent,
    SemaFormComponent,
    SemaDatecountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
