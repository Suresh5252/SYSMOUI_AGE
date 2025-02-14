import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel, ValidationErrors, Validator } from '@angular/forms';
import { IonicModule } from '@ionic/angular'
import { SysmoAgeComponent } from '../sysmo-age/sysmo-age.component';

@Component({
  selector: 'sysmo-dob',
  templateUrl: './sysmo-dob.component.html',
  styleUrls: ['./sysmo-dob.component.scss'],
  imports:[IonicModule,CommonModule,FormsModule,SysmoAgeComponent],
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

  
  @Input() customClass: string | string[] | { [key: string]: string } = '';

   @Input() customStyle: {[key:string]:string}={}

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

    console.log(this.customClass)
  }


}
