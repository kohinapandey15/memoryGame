import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSixComponent } from './game-six.component';

describe('GameSixComponent', () => {
  let component: GameSixComponent;
  let fixture: ComponentFixture<GameSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameSixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
