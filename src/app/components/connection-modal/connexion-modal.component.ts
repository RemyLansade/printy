import { Component } from '@angular/core';
import { NgIf } from "@angular/common";

import { RegisterFormComponent } from "../forms/register-form/register-form.component";
import { LoginFormComponent } from "../forms/login-form/login-form.component";

type ActiveTabSelector = "login" | "register";

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

  activeTab: ActiveTabSelector = "login";

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
