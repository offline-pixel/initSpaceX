import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexlpComponent } from './spacexlp.component';

describe('SpacexlpComponent', () => {
  let component: SpacexlpComponent;
  let fixture: ComponentFixture<SpacexlpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexlpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
