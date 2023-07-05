import { useState } from "react";
import Book from "../Book entry/Book";
import BookDetail from "./BookDetail";


const Books = [];

const AllBooks = (props) => {
    const [books, setBooks] = useState(Books);
    const [bookName, bookNameHandler] = useState('')
    const [author, authorNameHandler] = useState('')
    const [newbook, setNewBook] = useState({
        bookName: "",
        authorName: "",
        bookRead: false,
        
    })

    const submitBookHandler = (e) => {
        e.preventDefault()
        const bookToBeAdded = {
            ...newbook,
            id: newbook.bookName
        }
        setBooks(books.concat(bookToBeAdded))
        bookNameHandler('')
        authorNameHandler('')

    }

    const fieldChangeHander = (e) => {
        bookNameHandler(e.target.bookName)
        authorNameHandler(e.target.authorName)
        setNewBook({
            ...newbook,
            [e.target.name]: e.target.value,
            
        })
    }

    const bookReadHandler = (e) => {
        const book = books.find(book=>book.id===e)
        const changedBook = {...book, bookRead: !book.bookRead}
        setBooks(books.map(b=> b.id !== book.id ? b : changedBook))
        
    }

    const deleteBook =(e)=> {
        const bookMain = books.find(book=>book.id===e)
        setBooks(
        books.filter(book=>book.id!== bookMain.id)
        )
    }

    

    return(
    <div>   
    <Book formSubmitHandler={submitBookHandler} 
    fieldChangeHander={fieldChangeHander}
    bookNameHandler={bookName}
    authorNameHandler={author}/>
    <div>
        {books.map(book=><BookDetail
         name={book.bookName}
         author={book.authorName}
         bookReadHandler={()=>bookReadHandler(book.id)}
         deleteButtonHandler={()=> deleteBook(book.id)}/>)}
    </div>
    </div> 
    )

}

export default AllBooks