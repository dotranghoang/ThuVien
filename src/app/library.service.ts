import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Job} from './job';
import {Customer} from './customer';
import {Category} from './category';
import {Publisher} from './publisher';
import {Status} from './status';
import {Book} from './book';
import {MultiFile} from './MultiFile';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private readonly API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  getJobList(): Observable<Job[]> {
    return this.http.get<Job[]>(this.API_URL + '/job');
  }

  getCustomerList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL + '/customer');
  }

  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URL + '/category');
  }

  getPublisherList(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(this.API_URL + '/publisher');
  }

  getStatusList(): Observable<Status[]> {
    return this.http.get<Status[]>(this.API_URL + '/status');
  }

  getBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL + '/book');
  }

  createCustomer(customer: Partial<Customer>): Observable<Customer> {
    return this.http.post<Customer>(this.API_URL + '/customer', customer);
  }

  createBook(book: Partial<Book>): Observable<Book> {
    return this.http.post<Book>(this.API_URL + '/book', book);
  }

  uploadFile(file: FormData, bookId: number): Observable<MultiFile> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post<MultiFile>(this.API_URL + '/file/' + bookId, file, {headers});
  }

}
