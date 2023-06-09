import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'weather', loadChildren: () => 
    import('./components/weather/weather.module').then(m => m.WeatherModule) 
  }, 
  { path: 'home', loadChildren: () => 
  import('./components/home/home.module').then(m => m.HomeModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
