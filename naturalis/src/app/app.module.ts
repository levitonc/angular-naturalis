import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CoverComponent } from './components/cover/cover.component';
import { CategoryBarComponent } from './components/category-bar/category-bar.component';
import { PromoCardComponent } from './components/promo-card/promo-card.component';
import { CardLabelComponent } from './components/promo-card/card-label/card-label.component';
import { CardPriceComponent } from './components/promo-card/card-price/card-price.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    CoverComponent,
    CategoryBarComponent,
    PromoCardComponent,
    CardLabelComponent,
    CardPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
