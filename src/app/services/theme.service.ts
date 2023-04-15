import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme: string;

  constructor() {
    this.theme = "dark";
  }

  toggle(){
    this.theme = this.theme == "dark" ? "light" : "dark";
  }
}
