import { Component, NgModule } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-workout-chart',
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.css']
})

export class WorkoutChartComponent {
  barChartData: ChartData<'bar'> = {
    labels: ['Kartik Poddar', 'John Doe', 'Jane Smith', 'Mike Johnson', 'Ram Kapoor'],
    datasets: [
      {
        data: [70, 90, 80, 90, 110], // Total workout minutes per person
        label: 'Total Workout Minutes',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true }
    }
  };

  // Data for pie chart
  pieChartData: ChartData<'pie'> = {
    labels: ['Cycling', 'Running', 'Swimming', 'Yoga', 'Stretching', 'Plank', 'Squats'],
    datasets: [
      {
        data: [70, 50, 170, 50, 20, 20, 60], // Total minutes per workout type
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40', '#9966FF', '#FFAB91']
      }
    ]
  };

  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true
  };

  // Data for line chart
  lineChartData: ChartData<'line'> = {
    labels: ['Cycling', 'Running', 'Swimming', 'Yoga', 'Stretching', 'Plank', 'Squats'],
    datasets: [
      {
        data: [70, 50, 170, 50, 20, 20, 60], // Total minutes per workout type
        label: 'Total Workout Minutes',
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.1
      }
    ]
  };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true }
    }
  };
}

