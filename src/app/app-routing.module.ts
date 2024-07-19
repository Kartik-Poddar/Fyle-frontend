import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutChartComponent } from './workout-chart/workout-chart.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { HomeComponent } from './home/home.component';
import { AddListComponent } from './add-list/add-list.component';
const routes: Routes = [
  {
    path:'workout-chart',
    component:WorkoutChartComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path:'workout-list',
    component:WorkoutListComponent
  },
  {
    path:'add-list',
    component:AddListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
