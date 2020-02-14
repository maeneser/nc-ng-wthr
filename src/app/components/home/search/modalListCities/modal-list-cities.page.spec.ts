import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalListCitiesPage } from './modal-list-cities.page';

describe('ModalListCitiesPage', () => {
  let component: ModalListCitiesPage;
  let fixture: ComponentFixture<ModalListCitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalListCitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalListCitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
