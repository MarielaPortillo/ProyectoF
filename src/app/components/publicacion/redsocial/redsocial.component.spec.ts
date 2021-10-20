import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedsocialComponent } from './redsocial.component';

describe('RedsocialComponent', () => {
  let component: RedsocialComponent;
  let fixture: ComponentFixture<RedsocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedsocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
