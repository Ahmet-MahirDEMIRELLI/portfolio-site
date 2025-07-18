import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangugageService {
  private defaultLang = 'tr';

  constructor(private translate: TranslateService) {
    const savedLang = this.getSavedLang();
    this.setLanguage(savedLang || this.defaultLang);
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('appLanguage', lang);
  }

  getSavedLang(): string | null {
    return localStorage.getItem('appLanguage');
  }
}
