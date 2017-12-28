import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTeamsComponent } from './make-teams.component';

describe('MakeTeamsComponent', () => {
  let component: MakeTeamsComponent;
  let fixture: ComponentFixture<MakeTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
