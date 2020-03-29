import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentService } from './services/student/student.service';
import { StoreModule } from '@ngrx/store';
import { StudentReducer } from './reducers/student.reducer';
import { SettingsReducer } from './reducers/settings.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NoopAnimationsModule,
    MatTableModule,
    StoreModule.forRoot({students: StudentReducer, settings: SettingsReducer})
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
