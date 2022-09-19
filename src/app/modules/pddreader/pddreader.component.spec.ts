import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PddreaderComponent } from './pddreader.component';

describe('PddreaderComponent', () => {
  let component: PddreaderComponent;
  let fixture: ComponentFixture<PddreaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PddreaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PddreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
