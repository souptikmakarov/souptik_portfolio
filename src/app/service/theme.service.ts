import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Option } from "../models/options.model";

@Injectable()
export class ThemeService {
  constructor() {}
  theme: string = "dark";

  setTheme(themeToSet: string) {
    this.theme = themeToSet;
    // TODO(@SiddAjmera): Implement this later
  }
}