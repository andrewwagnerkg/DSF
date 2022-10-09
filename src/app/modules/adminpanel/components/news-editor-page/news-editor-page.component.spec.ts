import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEditorPageComponent } from './news-editor-page.component';

describe('NewsEditorPageComponent', () => {
  let component: NewsEditorPageComponent;
  let fixture: ComponentFixture<NewsEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsEditorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
