import { useState } from "react"
import './BookDetail.css'



const BookDetail = (props) => {
    const [readStatus, setReadStatus] = useState(true)
    const [ formClass, setFormClass] = useState('form')
const buttonClickHandler = (e) => {
    e.preventDefault();
    setReadStatus(status => !status)
    if(readStatus===true){
        setFormClass('form_read')
    } else {
        setFormClass('form')
    }
}
    return(
        <div className={formClass}>
            <div>
                Book name: {props.name}
            </div>
            <div>
                Book author: {props.author}
            </div>
            <div>
                Book read: {readStatus ? 'Unread' : 'Read'}
            </div>
            <div>
                <div>
                <button onClick={()=>{buttonClickHandler(); props.bookReadHandler();}}> {readStatus ? "Book Read" : "Book Unread"}</button>
                </div>
                <div>
                    <button onClick={props.deleteButtonHandler}> Delete </button>
                </div>
            </div>
        </div>
    )
}

export default BookDetail