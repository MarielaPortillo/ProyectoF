import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneComercioComponent } from './one-comercio.component';

describe('OneComercioComponent', () => {
  let component: OneComercioComponent;
  let fixture: ComponentFixture<OneComercioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneComercioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
