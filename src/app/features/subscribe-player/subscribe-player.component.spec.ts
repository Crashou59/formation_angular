import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribePlayerComponent } from './subscribe-player.component';

describe('SubscribePlayerComponent', () => {
  let component: SubscribePlayerComponent;
  let fixture: ComponentFixture<SubscribePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
