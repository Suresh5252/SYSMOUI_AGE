import { ChangeDetectionStrategy, Component } from '@angular/core';
import {IonicModule} from '@ionic/angular'
import { SysmoAgeComponent } from '../Components/sysmo-age/sysmo-age.component';
import { SysmoDobComponent } from '../Components/sysmo-dob/sysmo-dob.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonicModule,
    SysmoAgeComponent,
    SysmoDobComponent
  ],
   changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomePage {
  dob!:string
  changeDateOfBirth(event:string){
    this.dob=event
    console.log("From Home"+" "+this.dob)
  }
  constructor() {}
}
