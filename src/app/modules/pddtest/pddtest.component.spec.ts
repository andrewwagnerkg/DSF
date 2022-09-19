import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PddtestComponent } from './pddtest.component';

describe('PddtestComponent', () => {
  let component: PddtestComponent;
  let fixture: ComponentFixture<PddtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PddtestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PddtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
