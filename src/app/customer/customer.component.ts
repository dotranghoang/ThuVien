import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

  public customerList: Customer[] = [];
  ngOnInit() {
    this.libraryService.getCustomerList().subscribe(
      result => {
        this.customerList = result;
      }, error => {
        alert('error get customer');
      }
    );
  }

}
