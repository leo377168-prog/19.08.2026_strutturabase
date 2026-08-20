import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioProdottoComponentComponent } from './dettaglio-prodotto-component.component';

describe('DettaglioProdottoComponentComponent', () => {
  let component: DettaglioProdottoComponentComponent;
  let fixture: ComponentFixture<DettaglioProdottoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioProdottoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DettaglioProdottoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
