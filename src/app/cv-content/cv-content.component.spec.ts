import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVContentComponent } from './cv-content.component';

describe('CVContentComponent', () => {
  let component: CVContentComponent;
  let fixture: ComponentFixture<CVContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CVContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CVContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
