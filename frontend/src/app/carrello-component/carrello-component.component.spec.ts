import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrelloComponentComponent } from './carrello-component.component';

describe('CarrelloComponentComponent', () => {
  let component: CarrelloComponentComponent;
  let fixture: ComponentFixture<CarrelloComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrelloComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrelloComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
