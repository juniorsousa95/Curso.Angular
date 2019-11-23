import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorAtualComponent } from './cor-atual.component';

describe('CorAtualComponent', () => {
  let component: CorAtualComponent;
  let fixture: ComponentFixture<CorAtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorAtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
