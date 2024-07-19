import { TestBed } from '@angular/core/testing';
import { DataService, Data } from './data.service';
import { BehaviorSubject } from 'rxjs';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an empty initial data array', (done: DoneFn) => {
    service.data.subscribe(data => {
      expect(data).toEqual([]);
      done();
    });
  });

  it('should update the data correctly', (done: DoneFn) => {
    const testData: Data[] = [
      { name: "Kartik Poddar", workout_type: "Plank", no_of_workouts: 1, total_workout_mins: 20 },
      { name: "Ram Kapoor", workout_type: "Swimming", no_of_workouts: 1, total_workout_mins: 50 },
    ];

    service.updateData(testData);

    service.data.subscribe(data => {
      expect(data).toEqual(testData);
      done();
    });
  });
});