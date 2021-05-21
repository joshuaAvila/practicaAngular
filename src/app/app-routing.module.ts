import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidaTokenGuard } from './guards/valida-token.guard';

const routes: Routes = [

  {
  path: '',
  loadChildren: () =>import('./shared/shared.module').then(m => m.SharedModule)

  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule),
    canActivate: [ValidaTokenGuard],
    canLoad: [ValidaTokenGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
