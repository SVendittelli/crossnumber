import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CollapsiblePanelComponent } from './collapsible-panel/collapsible-panel.component';
import { DefaultContentComponent } from './default-content/default-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CollapsiblePanelComponent,
    DefaultContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
