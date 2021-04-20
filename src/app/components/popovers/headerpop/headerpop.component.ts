import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from "@ionic/angular";
import { ModalpopupPage } from '../../../modalpopup/modalpopup.page';

@Component({
  selector: 'app-headerpop',
  templateUrl: './headerpop.component.html',
  styleUrls: ['./headerpop.component.scss'],
})
export class HeaderpopComponent implements OnInit {

  constructor(
    private popover: PopoverController,
    private router: Router,
    private modalController: ModalController
  ) { }
 

  ngOnInit() { }

  ClosePopover() {
    this.popover.dismiss();
  }

  Help() {
    this.router.navigateByUrl('tabs/support/logout');
  }

  OpenModal() {
    this.modalController.create({ component: ModalpopupPage }).then((modalElement) => {
      modalElement.present();
    })
  }
}


