import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'characters',
    title: 'Characters',
    loadComponent: () => import('./features/character-list/character-list.component')
  },
  {
    path: 'characters/:id',
    title: 'Character',
    loadComponent: () => import('./features/character/character.component')
  },
  {
    path: 'comics',
    title: 'Comics',
    loadComponent: () => import('./features/comic-list/comic-list.component')
  },
  {
    path: 'comics/:id',
    title: 'Comics',
    loadComponent: () => import('./features/comic/comic.component')
  },
  {
    path: '**',
    redirectTo: 'characters',
    pathMatch: 'full'
  }
];
