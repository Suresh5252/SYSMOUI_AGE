import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-sysmo-dob',
  templateUrl: './sysmo-dob.component.html',
  styleUrls: ['./sysmo-dob.component.scss'],
  imports:[IonicModule,CommonModule,FormsModule],
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SysmoDobComponent  implements OnInit {

  dateOfBirth!:string
  minDate!:string
  maxDate!:string
  //To send the choosen date of birth to child Home component
  @Output() changeDob= new EventEmitter<string>()


  selectedDateOfBirth(event:any){
  try{
  this.dateOfBirth=event.target.value
  this.changeDob.emit(this.dateOfBirth) // the emitted data will be binded from home component to age 
}catch(error){
  console.error(error)
}


}
  constructor() { }

  ngOnInit() {
    //To restrict to choose age bellow 18 and above 60
    const currentyear=new Date().getFullYear()
    this.minDate=`${currentyear-60}-01-01`
    this.maxDate=`${currentyear-18}-12-31`
  }


}
