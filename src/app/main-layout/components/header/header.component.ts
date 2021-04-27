import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input()
  public isOpenMenuButtonActive = false;

  @Output()
  public clickMenuButton = new EventEmitter<void>();

  @Output()
  public clickBasketButton = new EventEmitter<void>();

  public queryValue: string;
  public isBasketOpened = false;

  public onToggleMenu() {
    this.clickMenuButton.emit();
  }

  public onToggleBasket() {
    this.isBasketOpened = !this.isBasketOpened;
    // this.clickBasketButton.emit();
  }
}
