import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Option } from "../models/options.model";
import { ThemeService } from "../service/theme.service";
import { StyleManagerService } from "../service/style-manager.service";
import options from 'src/assets/options.json';

@Component({
  selector: 'app-theme-menu',
  templateUrl: './theme-menu.component.html',
  styleUrls: ['./theme-menu.component.scss']
})
export class ThemeMenuComponent {
  options: Array<Option> = options;
  selectedTheme: Option = options[1];
  private readonly stylesBasePath = `assets/prebuilt-themes/`;

  constructor(private readonly styleManager: StyleManagerService, public themeService: ThemeService){}

  ngOnInit() {
    if (localStorage.getItem('preferredTheme')){
      if (localStorage.getItem('preferredTheme') == "light"){
        let themeToSet = this.options.filter((theme) => theme.theme == "light")[0];
        this.themeChangeHandler(themeToSet);
      }
      else{
        let themeToSet = this.options.filter((theme) => theme.theme == "dark")[0];
        this.themeChangeHandler(themeToSet);
      }
    }
    else{
      let themeToSet = this.options.filter((theme) => theme.theme == "light")[0];
      this.themeChangeHandler(themeToSet);
    }
  }

  ngAfterViewInit() {
    // console.log("Hello world")
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const button = document.querySelector('.container');

    if (this.selectedTheme.theme == "light"){
      if (!sun?.classList.contains('visible'))
        sun?.classList.add('visible')
      if (!moon?.classList.contains('visible'))
        moon?.classList.remove('visible')
    }

    button?.addEventListener('click', () => {
      sun?.classList.toggle('visible');
      moon?.classList.toggle('visible');
      if (this.selectedTheme.theme == "light"){
        let themeToSet = this.options.filter((theme) => theme.theme == "dark")[0];
        this.themeChangeHandler(themeToSet);
      }
      else{
        let themeToSet = this.options.filter((theme) => theme.theme == "light")[0];
        this.themeChangeHandler(themeToSet);
      }
    })
  }

  themeChangeHandler(themeToSet: Option) {
    this.selectedTheme = themeToSet;
    this.themeService.setTheme(themeToSet.theme);
    console.log(themeToSet);
    this.styleManager.setStyle(`${this.stylesBasePath}${themeToSet.value}.css`);
    localStorage.setItem("preferredTheme", themeToSet.theme)
  }
}
