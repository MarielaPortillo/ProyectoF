import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletoComponent } from './boleto.component';

describe('BoletoComponent', () => {
  let component: BoletoComponent;
  let fixture: ComponentFixture<BoletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 5950a1befba56186806b000d793945b39eebf991
