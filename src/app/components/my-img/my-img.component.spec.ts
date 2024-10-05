import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImgComponent } from './my-img.component';

describe('MyImgComponent', () => {
  let component: MyImgComponent;
  let fixture: ComponentFixture<MyImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
