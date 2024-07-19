import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject<Data[]>([]);
  data = this.dataSource.asObservable();

  constructor() { }

  updateData(newData: Data[]) {
    this.dataSource.next(newData);
  }
}

export interface Data {
  name: string;
  workout_type: string;
  no_of_workouts: number;
  total_workout_mins: number;
}

