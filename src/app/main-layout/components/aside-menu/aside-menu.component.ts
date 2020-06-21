import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent {

  @Output()
  public toggleMenu = new EventEmitter<void>();

  onToggle() {
    this.toggleMenu.emit();
  }
}