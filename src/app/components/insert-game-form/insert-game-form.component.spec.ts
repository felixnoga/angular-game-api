import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertGameFormComponent } from './insert-game-form.component';

describe('InsertGameFormComponent', () => {
  let component: InsertGameFormComponent;
  let fixture: ComponentFixture<InsertGameFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertGameFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertGameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
