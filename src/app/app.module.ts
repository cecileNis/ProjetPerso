import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";

import { AppComponent } from './app.component';
import { ProductCardComponent } from "./product-card/product-card.component";
import { SortByDatePipe } from "./pipes/product.pipe";
import { FilterByNamePipe } from './pipes/product.pipe';

import { FormsModule } from "@angular/forms";
import { ToBoldPipe } from './pipes/product.pipe';


registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe,
    FilterByNamePipe,
    ToBoldPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    SortByDatePipe,
    FilterByNamePipe,
    ToBoldPipe
  ],
  providers: [{
    provide : LOCALE_ID,
    useValue : 'fr-FR'// 'de-DE' for Germany, 'fr-FR' for France ...
  }],
  //providers:[],

  bootstrap: [AppComponent],
})
export class AppModule { }
