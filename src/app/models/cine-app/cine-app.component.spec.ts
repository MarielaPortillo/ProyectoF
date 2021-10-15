import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineAppComponent } from './cine-app.component';

describe('CineAppComponent', () => {
  let component: CineAppComponent;
  let fixture: ComponentFixture<CineAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CineAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CineAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
