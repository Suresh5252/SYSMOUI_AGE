import { ChangeDetectionStrategy, Component, OnChanges, Pipe, SimpleChanges } from '@angular/core';
import { IonicModule } from '@ionic/angular'
import { SysmoDobComponent } from '../Components/sysmo-dob/sysmo-dob.component';
import { FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    SysmoDobComponent,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnChanges {
  customClass: string | string[] | { [key: string]: string } = '';

  myForm = new FormGroup({
    dob: new FormControl('', Validators.required)
  })
  constructor() {
    
}
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log(this.myForm.get('dob'))
  }
}
