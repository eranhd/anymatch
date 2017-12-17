import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLayerComponent } from './my-layer.component';

describe('MyLayerComponent', () => {
  let component: MyLayerComponent;
  let fixture: ComponentFixture<MyLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
