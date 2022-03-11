import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";

import { AppComponent } from './app.component';
import { ProductCardComponent } from "./product-card/product-card.component";
import {SortByDatePipe, ToBoldPipe} from "./pipes/product.pipe";
import { FilterByNamePipe } from './pipes/product.pipe';

import { FormsModule } from "@angular/forms";
import { ProductsListComponent } from "./products-list/products-list.component";
import {AppRoutingModule} from "./app-routing.module";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProposComponent } from './propos/propos.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from "@angular/common/http";

registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe,
    FilterByNamePipe,
    ToBoldPipe,
    ProductsListComponent,
    ProductDetailComponent,
    ProposComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
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
