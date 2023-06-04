import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';
import{HttpClientModule } from '@angular/common/http';
import { CartlistComponent } from './cartlist/cartlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TshirtsComponent,
    FilterComponent,
    ListComponent,
    CartlistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
