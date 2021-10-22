import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePubliComponent } from './create-publi.component';

describe('CreatePubliComponent', () => {
  let component: CreatePubliComponent;
  let fixture: ComponentFixture<CreatePubliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePubliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePubliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
