import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/core/models/book';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  listOfBooks: Book[] = [];
  listOfBooksFiltred: Book[] = [];
  searchText: string = '';
  formBook!: FormGroup;
  constructor(private bookService: BookService, private fb: FormBuilder) {}
  ngOnInit() {
    this.bookService.getAllBooks().subscribe({
      next: (data) => {
        this.listOfBooks = data;
        this.listOfBooksFiltred = data;
      },
    });
    this.formBook = this.fb.group({
      title: ['',[Validators.required,Validators.minLength(3)]],
      author: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    });
  }

  get title() { 
    return this.formBook.get('title')
  }

  get author() {
    return this.formBook.get('author')
  }
  search() {
    if (this.searchText === '') {
      this.listOfBooksFiltred = this.listOfBooks;
    } else {
      this.listOfBooksFiltred = this.listOfBooks.filter(
        (b) => b.title.toLowerCase() === this.searchText.toLowerCase()
      );
    }
  }

  addBook() {
    this.bookService.addBook(this.formBook.value).subscribe({
      next: (data) => {
        this.listOfBooksFiltred.push(data);}
    })
  }
}
