import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CollapsiblePanelComponent } from './collapsible-panel/collapsible-panel.component';
import { DefaultContentComponent } from './default-content/default-content.component';
import { PuzzleGridComponent } from './puzzle-grid/puzzle-grid.component';
import { PuzzleSelectorComponent } from './puzzle-selector/puzzle-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CollapsiblePanelComponent,
    DefaultContentComponent,
    PuzzleGridComponent,
    PuzzleSelectorComponent
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
