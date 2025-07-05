import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-certificates-page',
  imports: [NgOptimizedImage, TranslateModule],
  templateUrl: './certificates-page.component.html',
  styleUrl: './certificates-page.component.css'
})
export class CertificatesPageComponent {

}
