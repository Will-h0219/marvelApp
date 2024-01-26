import { Component, signal } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { onSidenavChange } from './layout.animations';
import { routes } from '../app.routes';
import { CommonModule } from '@angular/common';

interface MenuItem {
  path: string;
  title: string;
  icon: string;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  animations: [onSidenavChange]
})
export class LayoutComponent {
  sidenavState = signal(false);
  routes: MenuItem[] = routes
    .filter(route => route && route.path && route.path !== '**')
    .filter(route => !route.path?.includes(':'))
    .map(route => ({
      path: route.path!,
      title: route.title as string,
      icon: route.data!['icon']
    }));

  toggleSidenavState() {
    this.sidenavState.update(() => !this.sidenavState());
  }
}
