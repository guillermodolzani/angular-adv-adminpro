import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

//modulos
import { PagesRoutingModule } from './pages/pages.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { authRoutingModule } from './auth/auth.routing';




const routes: Routes=[


 // path: '/dashboard' PagesRouting
 //path: 'auth' AuthRouting
 
 
 {path: '', redirectTo:'/dashboard', pathMatch: 'full' },
  {path: '**', component: NopagefoundComponent },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    authRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
