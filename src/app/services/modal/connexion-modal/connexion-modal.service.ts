import { Injectable } from '@angular/core';
import { Overlay } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";

import { ConnexionModalComponent } from "../../../components/connection-modal/connexion-modal.component";
import { IModalService } from "../IModalService";

@Injectable({
  providedIn: 'root'
})
export class ConnexionModalService implements IModalService {

  overlayRef = this.overlay.create({
    positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically(),
    hasBackdrop: true,
  })

  constructor(private overlay: Overlay) {}

  show() {
    this.overlayRef.attach(new ComponentPortal(ConnexionModalComponent));
  }

  hide() {
    this.overlayRef.detach();
  }
}
