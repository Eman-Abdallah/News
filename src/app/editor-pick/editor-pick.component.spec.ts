import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPickComponent } from './editor-pick.component';

describe('EditorPickComponent', () => {
  let component: EditorPickComponent;
  let fixture: ComponentFixture<EditorPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorPickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
