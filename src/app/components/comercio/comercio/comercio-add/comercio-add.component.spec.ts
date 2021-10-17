import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercioAddComponent } from './comercio-add.component';

describe('ComercioAddComponent', () => {
  let component: ComercioAddComponent;
  let fixture: ComponentFixture<ComercioAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComercioAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
