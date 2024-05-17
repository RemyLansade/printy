import { Component } from '@angular/core';
import { NgIf } from "@angular/common";

import { ConnexionModalService } from "../../services/modal/connexion-modal/connexion-modal.service";

import { RegisterFormComponent } from "../form/register-form/register-form.component";
import { LoginFormComponent } from "../form/login-form/login-form.component";

@Component({
  selector: 'connexion-modal',
  standalone: true,
  imports: [
    NgIf,
    RegisterFormComponent,
    LoginFormComponent
  ],
  templateUrl: './connexion-modal.component.html',
  styleUrl: './connexion-modal.component.css'
})
export class ConnexionModalComponent {

  activeTab: "login" | "register" = "login";

  constructor(private connexionModalService: ConnexionModalService) {
  }

  closeConnexionModal() {
    this.connexionModalService.hide();
  }

  setActiveTab(value: any) {
    const catchValue = value.target.innerHTML;
    if(catchValue.match("Se connecter")) {
      this.activeTab = "login";
    }
    if(catchValue.match("S'enregistrer")) {
      this.activeTab = "register";
    }
  }
}
