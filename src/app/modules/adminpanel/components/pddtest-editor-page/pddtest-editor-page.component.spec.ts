import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PddtestEditorPageComponent } from './pddtest-editor-page.component';

describe('PddtestEditorPageComponent', () => {
  let component: PddtestEditorPageComponent;
  let fixture: ComponentFixture<PddtestEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PddtestEditorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PddtestEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
