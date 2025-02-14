import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'sysmo-age',
  templateUrl: './sysmo-age.component.html',
  styleUrls: ['./sysmo-age.component.scss'],
  imports:[
    IonicModule,
    CommonModule,
    FormsModule
  ],
   changeDetection:ChangeDetectionStrategy.OnPush
})
export class SysmoAgeComponent  implements OnChanges {

  //Receive date of birth from Home component which is emited from sysmo-dob
  @Input() dob!:string
  isVisible:boolean=false
  age!:number

  //To calculate the age
  ageCalculator(){
    
    try{
      if(this.dob){
      const currentDate=new Date()
      const dateOfBirth = new Date(this.dob!)
      this.age=currentDate.getFullYear()-dateOfBirth.getFullYear()
      //check the birthday of the current year to return exact age
      if(currentDate.getMonth()<dateOfBirth.getMonth() || 
      currentDate.getMonth()===dateOfBirth.getMonth() && 
      currentDate.getDate()<dateOfBirth.getDate()){
        this.age--
      }
    }
      
    }catch(error){
      console.error(error)
    }
    // this.isVisible=true
    console.log(this.age)
    // return this.age
  }
  
  constructor() { }
  ngOnChanges(): void {
    this.ageCalculator()
  }

  ngOnInit() {}

}
