import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'characters',
    title: 'Characters',
    loadComponent: () => import('./features/character-list/character-list.component'),
    data: { icon: 'person' }
  },
  {
    path: 'characters/:id',
    title: 'Character',
    loadComponent: () => import('./features/character/character.component')
  },
  {
    path: 'comics',
    title: 'Comics',
    loadComponent: () => import('./features/comic-list/comic-list.component'),
    data: { icon: 'book' }
  },
  {
    path: 'comics/:id',
    title: 'Comics',
    loadComponent: () => import('./features/comic/comic.component')
  },
  {
    path: 'settings',
    title: 'Settings',
    loadComponent: () => import('./features/settings/settings.component'),
    data: { icon: 'settings' }
  },
  {
    path: '**',
    redirectTo: 'characters',
    pathMatch: 'full'
  }
];
