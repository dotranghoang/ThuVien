import {Component, OnInit} from '@angular/core';
import {LibraryService} from './library.service';
import {Category} from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ThuVien';

  public categoryList: Category[] = [];
  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.libraryService.getCategoryList().subscribe(
      result => {
        this.categoryList = result;
      }, error => {
        alert('error get category');
      }
    );
  }
}
