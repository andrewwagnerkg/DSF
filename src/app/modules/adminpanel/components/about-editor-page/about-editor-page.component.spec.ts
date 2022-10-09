import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEditorPageComponent } from './about-editor-page.component';

describe('AboutEditorPageComponent', () => {
  let component: AboutEditorPageComponent;
  let fixture: ComponentFixture<AboutEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEditorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
