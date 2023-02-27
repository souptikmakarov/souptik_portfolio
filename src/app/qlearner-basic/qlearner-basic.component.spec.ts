import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlearnerBasicComponent } from './qlearner-basic.component';

describe('QlearnerBasicComponent', () => {
  let component: QlearnerBasicComponent;
  let fixture: ComponentFixture<QlearnerBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlearnerBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QlearnerBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
