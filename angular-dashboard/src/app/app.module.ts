import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CongratulationsComponent } from './components/congratulations/congratulations.component';
import { MedalComponent } from './components/medal/medal.component';
import { StatsComponent } from './components/stats/stats.component';
import { StatComponent } from './components/stat/stat.component';
import { ButtonComponent } from './components/button/button.component';
import { RevenueContainerComponent } from './components/revenue-container/revenue-container.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfitComponent } from './components/profit/profit.component';
import { EarningsComponent } from './components/earnings/earnings.component';
import { RevenueReportComponent } from './components/revenue-report/revenue-report.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardContainerComponent,
    StatisticsComponent,
    CongratulationsComponent,
    MedalComponent,
    StatsComponent,
    StatComponent,
    ButtonComponent,
    RevenueContainerComponent,
    OrdersComponent,
    ProfitComponent,
    EarningsComponent,
    RevenueReportComponent,
    DropdownComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
