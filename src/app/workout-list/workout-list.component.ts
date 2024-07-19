import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'workout_type', 'no_of_workouts', 'total_workout_mins'];
  dataSource = new MatTableDataSource<Data>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.pattern("[A-Za-z0-9]+$")]),
    workout_type: new FormControl(''),
    workout_mins: new FormControl('', [Validators.pattern("[0-9]+$"), Validators.maxLength(3)])
  });

  errorMessage = '';

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.loginForm.valueChanges.subscribe(values => {
      this.applyFilter({
        name: values.name ?? '',
        workout_type: values.workout_type ?? ''
      });
    });
  }

  applyFilter(filterValues: { name: string; workout_type: string }) {
    this.dataSource.filterPredicate = (data: Data, filter: string) => {
      const filterObject = JSON.parse(filter);
      return (data.name.toLowerCase().includes(filterObject.name.toLowerCase()) ||
              filterObject.name === '') &&
             (data.workout_type.toLowerCase().includes(filterObject.workout_type.toLowerCase()) ||
              filterObject.workout_type === '');
    };

    this.dataSource.filter = JSON.stringify(filterValues);
  }

  SearchUser() {
    const filterValues = {
      name: this.loginForm.get('name')?.value ?? '',
      workout_type: this.loginForm.get('workout_type')?.value ?? ''
    };
    this.applyFilter(filterValues);
  }
}

export interface Data {
  name: string;
  workout_type: string;
  no_of_workouts: number;
  total_workout_mins: number;
}

const ELEMENT_DATA: Data[] = [
  { name: "Kartik Poddar", workout_type: "Cycling", no_of_workouts: 1, total_workout_mins: 30 },
  { name: 'John Doe', workout_type: "Running", no_of_workouts: 1, total_workout_mins: 30 },
  { name: 'John Doe', workout_type: "Swimming", no_of_workouts: 1, total_workout_mins: 60 },
  { name: "Jane Smith", workout_type: "Swimming", no_of_workouts: 1, total_workout_mins: 60 },
  { name: "Jane Smith", workout_type: "Running", no_of_workouts: 1, total_workout_mins: 20 },
  { name: "Mike Johnson", workout_type: "Yoga", no_of_workouts: 1, total_workout_mins: 50 },
  { name: "Mike Johnson", workout_type: "Cycling", no_of_workouts: 1, total_workout_mins: 40 },
  { name: "Kartik Poddar", workout_type: "Stretching", no_of_workouts: 1, total_workout_mins: 20 },
  { name: "Kartik Poddar", workout_type: "Plank", no_of_workouts: 1, total_workout_mins: 20 },
  { name: "Ram Kapoor", workout_type: "Swimming", no_of_workouts: 1, total_workout_mins: 50 },
  { name: "Ram Kapoor", workout_type: "Squats", no_of_workouts: 1, total_workout_mins: 60 },
];