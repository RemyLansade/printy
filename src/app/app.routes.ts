import { Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { CreationComponent } from "./components/creation/creation.component";
import { ExaminationComponent } from "./components/examination/examination.component";
import { ForumComponent } from "./components/forum/forum.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'creation', component: CreationComponent },
  { path: 'examination', component: ExaminationComponent },
  { path: 'forum', component: ForumComponent },
];
