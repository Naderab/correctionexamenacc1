import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library/library.component';
import { BookComponent } from './book/book.component';
import { LibraryRoutingRoutingModule } from './library-routing-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LibraryComponent, BookComponent],
  imports: [CommonModule, LibraryRoutingRoutingModule,FormsModule,ReactiveFormsModule],
})
export class AppLibraryModule {}
