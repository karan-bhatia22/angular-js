import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { SearchComponent } from './components/search/search.component';
import { PanelComponent } from './components/panel/panel.component';
import { LabelComponent } from './components/label/label.component';
import { FieldComponent } from './components/field/field.component';
import { StatComponent } from './components/stat/stat.component';
import { LanguageComponent } from './components/language/language.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    SearchComponent,
    PanelComponent,
    LabelComponent,
    FieldComponent,
    StatComponent,
    LanguageComponent,
    UserInfoComponent,
    UserStatsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
