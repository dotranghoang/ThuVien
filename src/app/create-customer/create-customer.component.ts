import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';
import {Job} from '../job';
import {FormControl} from '@angular/forms';
import {Customer} from '../customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

  inputName = new FormControl();
  inputBirthday = new FormControl();
  inputAddress = new FormControl();
  inputJob = new FormControl();

  public jobList: Job[] = [];

  ngOnInit() {
    this.libraryService.getJobList().subscribe(
      result => {
        this.jobList = result;
      }, error => {
        alert('Error get list job');
      }
    );
  }

  createNewCustomer() {
    if (this.inputAddress.value == null || this.inputBirthday.value == null ||
        this.inputName.value == null || this.inputJob.value == null) {
      return alert('Bạn Cần Điền Đủ Thông Tin');
    }

    const customer: Partial<Customer> = {
      name: this.inputName.value ,
      birthday: this.inputBirthday.value ,
      address: this.inputAddress.value ,
      jobId: this.inputJob.value
    };

    return this.libraryService.createCustomer(customer).subscribe(
      result => {
        alert('Đã tạo thành công người dùng! ');
        document.location.reload();
      }, error => {
        return alert('error add customer');
      }
    );
  }

}
