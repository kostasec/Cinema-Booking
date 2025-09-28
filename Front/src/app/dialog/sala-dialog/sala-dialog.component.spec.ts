import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaDialogComponent } from './sala-dialog.component';

describe('SalaDialogComponent', () => {
  let component: SalaDialogComponent;
  let fixture: ComponentFixture<SalaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
