import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-users-lists',
  templateUrl: './users-lists.component.html',
  styleUrls: ['./users-lists.component.scss']
})
export class UsersListsComponent implements OnInit {

  public items: any[];
  constructor(private systemService: SystemService) { }

  ngOnInit(): void {
    this.systemService.getUsersLists()
      .subscribe((value => {
        this.items = value;
        console.log(value);
      }));
  }

}
