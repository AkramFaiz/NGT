import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesRoomComponent } from './clothes-room.component';

describe('ClothesRoomComponent', () => {
  let component: ClothesRoomComponent;
  let fixture: ComponentFixture<ClothesRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
