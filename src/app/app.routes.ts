import { Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { CertificatesPageComponent } from './certificates-page/certificates-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'experience', component: ExperiencePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'certificates', component: CertificatesPageComponent },
  { path: 'contact', component: ContactPageComponent },
];
