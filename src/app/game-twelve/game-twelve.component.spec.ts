import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTwelveComponent } from './game-twelve.component';

describe('GameTwelveComponent', () => {
  let component: GameTwelveComponent;
  let fixture: ComponentFixture<GameTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameTwelveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
