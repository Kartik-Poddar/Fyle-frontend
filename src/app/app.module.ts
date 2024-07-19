import { NgModule, AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutChartComponent } from './workout-chart/workout-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { AddListComponent } from './add-list/add-list.component';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginator,MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Chart} from 'chart.js';


@NgModule({
  declarations: [
    AppComponent,
    WorkoutListComponent,
    WorkoutChartComponent,
    SidenavComponent,
    HomeComponent,
    AddListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule, 
    FormsModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
