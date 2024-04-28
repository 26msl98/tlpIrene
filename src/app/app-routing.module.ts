import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNuevaComponent } from './views/pagina-nueva/pagina-nueva.component';
import { Pagina2Component } from './views/pagina-2/pagina-2.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
