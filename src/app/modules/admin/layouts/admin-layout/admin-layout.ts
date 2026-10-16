import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from '../../shared/components/side-menu/side-menu';
import {JlasSideMenu, TitleColor} from 'jlas-side-menu';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, SideMenu, JlasSideMenu],
  templateUrl: './admin-layout.html',
})
export default class AdminLayout {
  isAuthenticated = signal(false);
  titleColor = TitleColor;
  onLogin() {
    this.isAuthenticated.set(true);
  }
  onLogout() {
    this.isAuthenticated.set(false);
  }
}
