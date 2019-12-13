import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PickUpComponent } from './pick-up.component';
import { DatePickerComponent } from './../date-picker/date-picker.component';
import {BadgeDirective} from './../badge.directive';
import {BadgeNamePipe} from './../badge-name.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; 



describe('PickUpComponent', () => {
  let component: PickUpComponent;
  let fixture: ComponentFixture<PickUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,NgbModule,HttpClientModule ],
      declarations: [ 
        PickUpComponent,
        BadgeDirective,
        BadgeNamePipe,
        DatePickerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should render Where are you going?', async(() => {
    let fixture = TestBed.createComponent(PickUpComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#title').textContent).toContain('Where are you going?');
  }));

});
