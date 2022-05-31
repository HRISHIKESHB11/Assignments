import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClgInfosComponent } from './clg-infos.component';

describe('ClgInfosComponent', () => {
  let component: ClgInfosComponent;
  let fixture: ComponentFixture<ClgInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClgInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClgInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
