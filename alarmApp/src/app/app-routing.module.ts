import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home/home.module';
import { LoginPageModule } from './pages/login/login.module';
import { AnimalesPageModule } from './pages/animales/animales.module';
import { ColoresPageModule } from './pages/colores/colores.module';
import { NumerosPageModule } from './pages/numeros/numeros.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'animales', loadChildren: './pages/animales/animales.module#AnimalesPageModule' },
  { path: 'colores', loadChildren: './pages/colores/colores.module#ColoresPageModule' },
  { path: 'numeros', loadChildren: './pages/numeros/numeros.module#NumerosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
