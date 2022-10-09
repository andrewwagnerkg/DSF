import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEditorPageComponent } from './contact-editor-page.component';

describe('ContactEditorPageComponent', () => {
  let component: ContactEditorPageComponent;
  let fixture: ComponentFixture<ContactEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEditorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
