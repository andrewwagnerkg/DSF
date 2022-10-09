import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceEditorPageComponent } from './price-editor-page.component';

describe('PriceEditorPageComponent', () => {
  let component: PriceEditorPageComponent;
  let fixture: ComponentFixture<PriceEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceEditorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
