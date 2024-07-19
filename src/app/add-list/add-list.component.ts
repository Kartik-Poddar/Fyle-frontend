import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddListComponent {
  hide = true;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9]*')]),
    workout_mins: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(3)]),
    workout_type: new FormControl('', [Validators.required])
  })
  errorMessage = '';

  // constructor() {
  //   merge(this.loginForm.get('username').statusChanges, this.loginForm.get('username').valueChanges)
  //     .pipe(takeUntilDestroyed(this))
  //     .subscribe(() => this.updateErrorMessage());
  // }

  updateErrorMessage() {
    const usernameControl = this.loginForm.get('username');
    const workoutMinsControl = this.loginForm.get('workout_mins');
    const workoutTypeControl = this.loginForm.get('workout_type');

    if (usernameControl?.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (usernameControl?.hasError('pattern')) {
      this.errorMessage = 'Not a valid username';
    } else if (workoutMinsControl?.hasError('required')) {
      this.errorMessage = 'Workout minutes are required';
    } else if (workoutMinsControl?.hasError('pattern')) {
      this.errorMessage = 'Workout minutes must be a number';
    } else if (workoutMinsControl?.hasError('maxlength')) {
      this.errorMessage = 'Workout minutes should not exceed 3 digits';
    } else if (workoutTypeControl?.hasError('required')) {
      this.errorMessage = 'Workout type is required';
    } else {
      this.errorMessage = '';
    }
  }
  ngOnInit() {
    // Load saved form data from localStorage on initialization
    this.loadFormData();

    // Subscribe to form changes to update error messages
    this.loginForm.valueChanges.subscribe(() => {
      this.updateErrorMessage();
    });
  }

  // Method to handle form submission
  AddUser() {
    if (this.loginForm.valid) {
      // Save form data to localStorage
      this.saveFormData(this.loginForm.value);
      // Optionally reset the form
      this.loginForm.reset();
      this.errorMessage = ''; // Clear error message if form is valid
    }
  }

  // Method to save form data to localStorage
  saveFormData(formData: any) {
    localStorage.setItem('formData', JSON.stringify(formData));
  }

  // Method to load form data from localStorage
  loadFormData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.loginForm.setValue(JSON.parse(savedData));
    }
  }

  get username() {
    return this.loginForm.get('username')
  }
  get workout_type() {
    return this.loginForm.get('workout_type')
  }
  get workout_mins() {
    return this.loginForm.get('workout_mins')
  }
}