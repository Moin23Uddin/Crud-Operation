import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoststudentsComponent } from './poststudents.component';

describe('PoststudentsComponent', () => {
  let component: PoststudentsComponent;
  let fixture: ComponentFixture<PoststudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoststudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoststudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
