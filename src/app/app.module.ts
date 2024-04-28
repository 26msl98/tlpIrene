import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { RouterModule, Routes } from '@angular/router';
import { PaginaNuevaComponent } from './views/pagina-nueva/pagina-nueva.component';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Pagina2Component } from './views/pagina-2/pagina-2.component';
import { Pagina3Component } from './views/pagina-3/pagina-3.component';
import { Pagina4Component } from './views/pagina-4/pagina-4.component';
import { Pagina5Component } from './views/pagina-5/pagina-5.component';

const appRoutes: Routes = [
  { path: 'pg26', 
    component: PaginaNuevaComponent 
  },
  { path: 'ndm14', 
    component: Pagina2Component 
  },
  { path: 'sdy11', 
  component: Pagina3Component 
  },
  { path: 'rev21', 
  component: Pagina4Component 
  },
  { path: 'er13', 
  component: Pagina5Component 
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PaginaNuevaComponent,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    Pagina5Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
         BrowserAnimationsModule,
         MatIconModule,
         MatListModule,
         CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
