import { inject, Injectable } from '@angular/core';
import { Overlay } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";

import { ConnexionModalComponent } from "../../../components/connection-modal/connexion-modal.component";

@Injectable({
  providedIn: 'root'
})
export class ConnexionModalService {

  overlayRef;
  overlay = inject(Overlay);

  constructor() {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true,
    });

    this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
  }

  show() {
    this.overlayRef.attach(new ComponentPortal(ConnexionModalComponent));
  }
}
