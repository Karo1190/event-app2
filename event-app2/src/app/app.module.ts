import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { HeaderComponent } from './header/header.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PanelModule } from 'primeng/panel';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SectionComponent } from './section/section.component';
import { RatingModule } from 'primeng/rating';
import { EventDetailsTableComponent } from './event-details/event-details-table/event-details-table.component';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { TimelineModule } from 'primeng/timeline';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { ModalAccountComponent } from './account/modal-account/modal-account.component';
import { LoginComponent } from './account/login/login.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { StepperModule } from 'primeng/stepper';
import { RegistrationComponent } from './account/registration/registration.component';
import { ErrorMesageComponent } from './shared/error-mesage/error-mesage.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

registerLocaleData(localePl);


@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, EventDetailsComponent, SectionComponent, EventDetailsTableComponent, ModalAccountComponent, LoginComponent, RegistrationComponent, ErrorMesageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    PanelModule,
    SelectButtonModule,
    CarouselModule,
    RatingModule, 
    TableModule,
    DataViewModule,
    HttpClientModule,
    SplitterModule,
    DividerModule,
    CardModule,
    FieldsetModule,
    TimelineModule,
    CalendarModule,
    DialogModule,
    TabViewModule,
    FloatLabelModule,
    CheckboxModule,
    DynamicDialogModule,
    StepperModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [DatePipe, DialogService ],
  // [{ provide: LOCALE_ID, useValue: 'pl' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

