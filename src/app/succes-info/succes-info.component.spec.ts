import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesInfoComponent } from './succes-info.component';

describe('SuccesInfoComponent', () => {
  let component: SuccesInfoComponent;
  let fixture: ComponentFixture<SuccesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
