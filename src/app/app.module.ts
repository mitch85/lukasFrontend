import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WorkingTableComponent } from './working-table/working-table.component';

@NgModule({
  declarations: [AppComponent, WorkingTableComponent],
  imports: [BrowserModule, AppRoutingModule, AgGridModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
