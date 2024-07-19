import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject<PeriodicElement[]>([]);
  data = this.dataSource.asObservable();

  constructor() { }

  updateData(newData: PeriodicElement[]) {
    this.dataSource.next(newData);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

