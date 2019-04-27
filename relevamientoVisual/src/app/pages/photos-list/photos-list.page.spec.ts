import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosListPage } from './photos-list.page';

describe('PhotosListPage', () => {
  let component: PhotosListPage;
  let fixture: ComponentFixture<PhotosListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
