import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationEditorPageComponent } from './information-editor-page.component';

describe('InformationEditorPageComponent', () => {
  let component: InformationEditorPageComponent;
  let fixture: ComponentFixture<InformationEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationEditorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
