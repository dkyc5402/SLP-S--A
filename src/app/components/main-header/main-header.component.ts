import { Component, OnInit } from '@angular/core';
import {ModalpopupPage} from '../../modalpopup/modalpopup.page';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { HeaderpopComponent } from '../../components/popovers/headerpop/headerpop.component';


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {

  constructor(public popoverController: PopoverController,private modalController:ModalController) { }

  ngOnInit() {}

  OpenModal() {
    this.modalController.create({component:ModalpopupPage}).then((modalElement)=>{
      modalElement.present();
    })
  }

  async presentPopover(ev) {
    const popover = await this.popoverController.create({
      component: HeaderpopComponent,
      cssClass: "HeaderPopover",
      event: ev,
      translucent: true,
      showBackdrop: false,
      backdropDismiss: true,
      mode:"md",
      
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}


