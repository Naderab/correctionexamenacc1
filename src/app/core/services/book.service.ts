import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = "http://localhost:3000/books"
  constructor(private http: HttpClient) { }
  
  getAllBooks() {
    return this.http.get<Book[]>(this.apiUrl);
  }

  addBook(book: Book) {
    return this.http.post<Book>(this.apiUrl, book);
  }
}
