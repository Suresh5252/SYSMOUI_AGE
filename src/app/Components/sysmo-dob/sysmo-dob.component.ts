import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel, ValidationErrors, Validator } from '@angular/forms';
import { IonicModule } from '@ionic/angular'
import { SysmoAgeComponent } from '../sysmo-age/sysmo-age.component';

@Pipe({
  name:'ageCalculator',
  pure:true
})
export class AgeCalculatorPipe implements PipeTransform{
  
  transform(dateOfBirth: string, ...args: any[]) {
    let age;
    try{
      if(dateOfBirth){
      const currentDate=new Date()
      const dob = new Date(dateOfBirth)
      age=currentDate.getFullYear()-dob.getFullYear()
      //check the birthday of the current year to return exact age
      if(currentDate.getMonth()<dob.getMonth() || 
      currentDate.getMonth()===dob.getMonth() && 
      currentDate.getDate()<dob.getDate()){
        age--
      }
    } 
    }catch(error){
      console.error(error)
    }
    console.log(age)
    return age
  }
  }

@Component({
  selector: 'sysmo-dob',
  templateUrl: './sysmo-dob.component.html',
  styleUrls: ['./sysmo-dob.component.scss'],
  imports:[IonicModule,CommonModule,FormsModule,AgeCalculatorPipe],
   providers:[
      {
      provide:NG_VALUE_ACCESSOR,
      useExisting:SysmoDobComponent,
      multi:true
      },
  ],
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SysmoDobComponent  implements OnInit,ControlValueAccessor {

  @Input() ageText!:string
  @Input() customClassInput: string | string[] | { [key: string]: string } = '';
  @Input() customStyleText: {[key:string]:string}={}

  dateOfBirth!:string
  minDate!:string
  maxDate!:string
   onChange:(dateOfBirth:string)=>void=()=>{};
   onTouched: () => void = () => {};

  selectedDateOfBirth(event:Event){
  try{
  const input = event.target as HTMLInputElement;
  this.dateOfBirth=input.value
  this.onChange(this.dateOfBirth)
}catch(error){
  console.error(error)
}


}
  constructor() { }
 
 
  writeValue(obj: string): void {
    console.log(obj)
    this.dateOfBirth=obj
    
  }
  registerOnChange(fn: any): void {
    this.onChange=fn
    
  }
  registerOnTouched(fn: any): void {
    this.onTouched=fn 
    
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }
  handleBlur(){
    this.onTouched()
  }
  ngOnInit() {
    //To restrict to choose age bellow 18 and above 60
    const currentyear=new Date().getFullYear()
    this.minDate=`${currentyear-60}-01-01`
    this.maxDate=`${currentyear-18}-12-31`
    console.log(this.dateOfBirth)
  }


}


