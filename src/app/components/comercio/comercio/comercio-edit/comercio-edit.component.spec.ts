import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercioEditComponent } from './comercio-edit.component';

describe('ComercioEditComponent', () => {
  let component: ComercioEditComponent;
  let fixture: ComponentFixture<ComercioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComercioEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
