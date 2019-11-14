import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {LibraryService} from '../library.service';
import {Book} from '../book';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.scss']
})
export class ShowBookComponent implements OnInit {
  imgUrl = environment.imgUrl;
  public bookList: Book[] = [];


  constructor(private libraryService: LibraryService) { }


  ngOnInit() {
    this.libraryService.getBookList().subscribe(
      result => {
        this.bookList = result;
      }, error => {
        alert('error get book');
      }
    );
  }

}
