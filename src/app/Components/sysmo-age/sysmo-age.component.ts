import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-sysmo-age',
  templateUrl: './sysmo-age.component.html',
  styleUrls: ['./sysmo-age.component.scss'],
  imports:[
    IonicModule,
    CommonModule
  ],
   changeDetection:ChangeDetectionStrategy.OnPush
})
export class SysmoAgeComponent  implements OnInit {

  //Receive date of birth from Home component which is emited from sysmo-dob
  @Input() dob!:string
  age!:number

  //To calculate the age
  ageCalculator():number | null{
    
    try{
    if (!this.dob) return null;
    const currentDate=new Date()
    const dateOfBirth = new Date(this.dob)
      this.age=currentDate.getFullYear()-dateOfBirth.getFullYear()
      //check the birthday of the current year to return exact age
      if(currentDate.getMonth()<dateOfBirth.getMonth() || 
      currentDate.getMonth()===dateOfBirth.getMonth() && 
      currentDate.getDate()>dateOfBirth.getDate()){
        this.age--
      }
      
    }catch(error){
      console.error(error)
    }
    return this.age
  }
  
  constructor() { }

  ngOnInit() {}

}
