import FormComponents from "../FormComponents"
import { useState } from "react"
import './Book.css'
import './Form.css'

const Book = (props) => {

    const [ formClass, setFormClass] = useState('form')
    
    return(
        <div className="book">
            <form onSubmit={props.formSubmitHandler} className={formClass}>
                <div>
                <label>
                    Book name: <input type="text"
                     name="bookName" 
                     value={props.bookNameHandler}
                     onChange={props.fieldChangeHander}/>
                </label>
                </div>
                <div>
                <label>
                    Author name: <input type="text" 
                    value={props.authorNameHandler}
                    name="authorName" 
                    onChange={props.fieldChangeHander}/>
                </label>
                </div>
               
                <div>
                <button type="submit"> Add book </button>
                </div>
            </form>
        </div>
    )
}

export default Book