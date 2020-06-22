import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketModalComponent } from './basket-modal.component';

describe('BasketModalComponent', () => {
  let component: BasketModalComponent;
  let fixture: ComponentFixture<BasketModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
