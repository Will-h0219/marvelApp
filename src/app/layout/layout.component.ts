import { Component, Signal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { onSidenavChange } from './layout.animations';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  animations: [onSidenavChange]
})
export class LayoutComponent {
  sidenavState = signal(false);

  toggleSidenavState() {
    this.sidenavState.update(() => !this.sidenavState());
  }
}
