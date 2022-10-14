import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQustionComponent } from './edit-qustion.component';

describe('EditQustionComponent', () => {
  let component: EditQustionComponent;
  let fixture: ComponentFixture<EditQustionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQustionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditQustionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
