import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

import { ConnexionModalService } from "../../services/modal/connexion-modal/connexion-modal.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  modal = inject(ConnexionModalService)

  openConnexionModal() {
    this.modal.show();
  }
}
