import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioskopDialogComponent } from './bioskop-dialog.component';

describe('BioskopDialogComponent', () => {
  let component: BioskopDialogComponent;
  let fixture: ComponentFixture<BioskopDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioskopDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioskopDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
