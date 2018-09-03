import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { DonutsRainComponent } from './components/donuts-rain/donuts-rain.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { OrbitComponent } from './components/rotate/orbit.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DonutsRainComponent,
    OrbitComponent
  ],
  imports: [
    BrowserModule,
    // ClarityModule,
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
