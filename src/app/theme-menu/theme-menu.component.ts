import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Option } from "../models/options.model";
import { ThemeService } from "../service/theme.service";

@Component({
  selector: 'app-theme-menu',
  templateUrl: './theme-menu.component.html',
  styleUrls: ['./theme-menu.component.scss']
})
export class ThemeMenuComponent {
  @Input() theme!: Option;
  @Input() options!: Array<Option>;
  @Output() themeChange: EventEmitter<Option> = new EventEmitter<Option>();

  constructor(public themeService: ThemeService){}

  ngOnChanges() {
    console.log(this.theme);
  }

  changeTheme(themeToSet: Option) {
    this.themeService.setTheme(themeToSet.theme);
    this.themeChange.emit(themeToSet);
  }
}
