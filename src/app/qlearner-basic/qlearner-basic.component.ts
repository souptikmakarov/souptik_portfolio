import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-qlearner-basic',
  templateUrl: './qlearner-basic.component.html',
  styleUrls: ['./qlearner-basic.component.scss']
})
export class QlearnerBasicComponent {

  constructor(public themeService: ThemeService){

  }

}
