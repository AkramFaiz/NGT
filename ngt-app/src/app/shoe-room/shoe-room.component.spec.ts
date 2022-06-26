import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeRoomComponent } from './shoe-room.component';

describe('ShoeRoomComponent', () => {
  let component: ShoeRoomComponent;
  let fixture: ComponentFixture<ShoeRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoeRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoeRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
