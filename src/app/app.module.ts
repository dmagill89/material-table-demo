import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TableComponent } from './table/table.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentService } from './services/student/student.service';
import { StoreModule } from '@ngrx/store';
import { StudentReducer } from './reducers/student.reducer';
import { SettingsReducer } from './reducers/settings.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './effects/student.effects';
import { MatSortModule } from '@angular/material/sort';

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
    EffectsModule.forRoot([StudentEffects]),
    NoopAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({students: StudentReducer, settings: SettingsReducer})
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
