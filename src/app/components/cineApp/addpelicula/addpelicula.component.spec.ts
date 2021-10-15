import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpeliculaComponent } from './addpelicula.component';

describe('AddpeliculaComponent', () => {
  let component: AddpeliculaComponent;
  let fixture: ComponentFixture<AddpeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
