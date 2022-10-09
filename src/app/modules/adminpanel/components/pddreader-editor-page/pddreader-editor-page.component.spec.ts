import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PddreaderEditorPageComponent } from './pddreader-editor-page.component';

describe('PddreaderEditorPageComponent', () => {
  let component: PddreaderEditorPageComponent;
  let fixture: ComponentFixture<PddreaderEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PddreaderEditorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PddreaderEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
