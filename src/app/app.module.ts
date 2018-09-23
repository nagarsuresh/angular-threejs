import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { DonutsRainComponent } from './components/donuts-rain/donuts-rain.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { OrbitComponent } from './components/rotate/orbit.component';
import { MovingSpotlightComponent } from './components/moving-spotlight/moving-spotlight.component';
import { OrthographicComponent } from './components/orthographic/orthographic.component';
import { SolarSystemComponent } from './components/solar-system/solar-system.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DonutsRainComponent,
    OrbitComponent,
    MovingSpotlightComponent,
    OrthographicComponent,
    SolarSystemComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'box',
        component: FirstComponent
      },
      {
        path: 'donuts',
        component: DonutsRainComponent
      },
      {
        path: 'orbit',
        component: OrbitComponent
      },
      {
        path: 'spotlight',
        component: MovingSpotlightComponent
      },
      {
        path: 'solar-system',
        component: SolarSystemComponent
      },
      {
        path: 'orthographic',
        component: OrthographicComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'box'
      }
    ])
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
