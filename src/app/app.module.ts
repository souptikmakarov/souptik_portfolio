import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QlearnerBasicComponent } from './qlearner-basic/qlearner-basic.component';
import { RpmComponent } from './rpm/rpm.component';
import { ThemeMenuComponent } from './theme-menu/theme-menu.component';
import { StyleManagerService } from './service/style-manager.service';
import { ThemeService } from './service/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    QlearnerBasicComponent,
    RpmComponent,
    ThemeMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StyleManagerService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
