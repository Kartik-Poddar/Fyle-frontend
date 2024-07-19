import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddListComponent } from './add-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AddListComponent', () => {
  let component: AddListComponent;
  let fixture: ComponentFixture<AddListComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddListComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    expect(component.loginForm.get('username')?.value).toBe('');
    expect(component.loginForm.get('workout_type')?.value).toBe('');
    expect(component.loginForm.get('workout_mins')?.value).toBe('');
  });

  it('should show error message if username is empty', () => {
    const usernameControl = component.loginForm.get('username');
    usernameControl?.setValue('');
    usernameControl?.markAsTouched();
    fixture.detectChanges();

    const errorMessage = fixture.debugElement.query(By.css('mat-error'));
    expect(errorMessage.nativeElement.textContent).toContain('You must enter a value');
  });

  it('should show error message if workout minutes are invalid', () => {
    const workoutMinsControl = component.loginForm.get('workout_mins');
    workoutMinsControl?.setValue('abc');
    workoutMinsControl?.markAsTouched();
    fixture.detectChanges();

    const errorMessage = fixture.debugElement.query(By.css('mat-error'));
    expect(errorMessage.nativeElement.textContent).toContain('Workout minutes must be a number');
  });

  it('should update error message correctly', () => {
    component.loginForm.get('username')?.setValue('');
    component.updateErrorMessage();
    fixture.detectChanges();

    expect(component.errorMessage).toBe('You must enter a value');
  });

  it('should call AddUser() when form is valid', () => {
    spyOn(component, 'AddUser').and.callThrough();
    
    component.loginForm.setValue({
      username: 'JohnDoe',
      workout_type: 'running',
      workout_mins: '30'
    });

    component.AddUser();
    expect(component.AddUser).toHaveBeenCalled();
  });

  it('should save form data to localStorage on valid form submission', () => {
    spyOn(localStorage, 'setItem');
    
    component.loginForm.setValue({
      username: 'JaneDoe',
      workout_type: 'cycling',
      workout_mins: '45'
    });

    component.AddUser();
    expect(localStorage.setItem).toHaveBeenCalledWith('formData', JSON.stringify({
      username: 'JaneDoe',
      workout_type: 'cycling',
      workout_mins: '45'
    }));
  });
});

