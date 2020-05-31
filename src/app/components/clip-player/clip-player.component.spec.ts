import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipPlayerComponent } from './clip-player.component';

describe('ClipPlayerComponent', () => {
  let component: ClipPlayerComponent;
  let fixture: ComponentFixture<ClipPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
