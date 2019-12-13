import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickUpComponent } from './pick-up/pick-up.component';
import { PickUpService } from './pick-up.service';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule }   from '@angular/forms';
import { BadgeDirective } from './badge.directive';
import { BadgeNamePipe } from './badge-name.pipe';
import { DatePickerComponent } from './date-picker/date-picker.component';




@NgModule({
  declarations: [
    AppComponent,
    PickUpComponent,
    BadgeDirective,
    BadgeNamePipe,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,

  ],
  providers: [PickUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
