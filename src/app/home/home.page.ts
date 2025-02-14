import { ChangeDetectionStrategy, Component, Pipe } from '@angular/core';
import {IonicModule} from '@ionic/angular'
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
   changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomePage {

  myForm=new FormGroup({
    dob:new FormControl('',Validators.required)
  })
  constructor() {}
}
