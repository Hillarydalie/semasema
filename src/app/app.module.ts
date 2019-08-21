import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemaComponent } from './sema/sema.component';
import { SemaFormComponent } from './sema-form/sema-form.component';
import { SemaDescriptionComponent } from './sema-description/sema-description.component';
import { SemaDatecountPipe } from './sema-datecount.pipe';
import { LikeSemaComponent } from './like-sema/like-sema.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemaComponent,
    SemaFormComponent,
    SemaDescriptionComponent,
    SemaDatecountPipe,
    LikeSemaComponent,
    DateCountPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
