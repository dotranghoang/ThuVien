import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';
import {Category} from '../category';
import {Publisher} from '../publisher';
import {Status} from '../status';
import {FormControl} from '@angular/forms';
import {Book} from '../book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

  public categoryList: Category[] = [];
  public publisherList: Publisher[] = [];
  public statusList: Status[] = [];
  public book1: Book;
  public bookId: number;

  inputBook = new FormControl();
  inputCategory = new FormControl();
  inputAuthor = new FormControl();
  inputPublisher = new FormControl();
  inputImage = new FormControl();
  inputStatus = new FormControl();

  fileUpload: File;
  ngOnInit() {
    this.libraryService.getCategoryList().subscribe(
      result => {
        this.categoryList = result;
      }, error => {
        alert('error get category');
      }
    );

    this.libraryService.getStatusList().subscribe(
      result => {
        this.statusList = result;
      }, error => {
        alert('error get status');
      }
    );

    this.libraryService.getPublisherList().subscribe(
      result => {
        this.publisherList = result;
      }, error => {
        alert('error get publisher');
      }
    );
  }

  handleFileChooser(files: FileList) {
    this.fileUpload = files.item(0);
  }

  createNewBook() {
    if (this.inputBook.value == null || this.inputPublisher.value == null ||
      this.inputCategory == null || this.inputAuthor.value == null ||
      this.inputImage.value == null || this.inputStatus.value == null) {
      return alert('Bạn Cần Điền Đủ Thông Tin');
    }

    const book: Partial<Book> = {
      book: this.inputBook.value ,
      author: this.inputAuthor.value ,
      categoryId: this.inputCategory.value ,
      statusId : this.inputStatus.value ,
      publisherId : this.inputPublisher.value
    };
    this.libraryService.createBook(book).subscribe(
      next => {
        const form = new FormData();
        form.append('file', this.fileUpload);
        this.libraryService.uploadFile(form , next.id).subscribe(
          result => {
            console.log(next.id);
          }, error => {
            alert('Upload file Fail');
          }
        );
      }, error => {
        return alert('error add post');
      });

    alert('Thêm sách thành công');
    document.location.reload();
  }

}
