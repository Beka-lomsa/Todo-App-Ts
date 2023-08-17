import { BsCheckCircleFill } from "react-icons/bs";
import { LuCircle } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Data from "../Components/Data"
import "./Todo.css";

interface TodoItem {
  text: string;
  completed: boolean;
  uuid: string;
}
interface DateInfo {
  fullHour:string
}


function Todo() {
  // UseStates
  const [text, setText] = useState("");
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const {fullHour}:DateInfo= Data()

//*   functional part */

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(todo.length >= 7){
      return setText("it's over")
    }
    const newTodoItem: TodoItem = {
      text: text,
      completed: false,
      uuid: uuidv4(),
    };
    setTodo([...todo, newTodoItem]);
    setText("");
  }
  // Delete Listed Item
  function handleDelete(itemId: string) {
    const updatedTodo = todo.filter((item) => {
   return  !item.completed || item.uuid !== itemId
    });
    setTodo(updatedTodo);
  }

  // Edit Listed Item
  function handleEdit(itemId:string, itemText:string){
   const editedTodo = todo.filter((item) => {
    return !item.completed || item.uuid !== itemId
       
   })
   setTodo(editedTodo)
   setText(itemText)   
 
  } 

 //Checked / unChecked
  function hancleChange(itemId:string) {
    const checkedTodo = todo.map((item) => {
      if(item.uuid === itemId) {
        return {...item, completed: !item.completed}
      } else {
        return {...item, completed: false}
      }
    });
    setTodo(checkedTodo)
  }

  //*  Logical part */
  return (
    <div className="todoFormContainer">
      {/* submit form */}
      
      <form onSubmit={handleSubmit}>
        <div className="text_add_Btn">
          <div className="text">
            <BsCheckCircleFill className="checkedIcon" />
            <input
              className="inputText"
              type="text"
              placeholder="Note"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button className="addBtn" type="submit">
            +
          </button>
        </div>
        
        {/* inputed Element lists */}
        {todo.map((item) => (
          <div className="listedElement" key={item.uuid}>
            <div>
              <p className="inputedText">{item.text}</p>
              <span className="fullHour">{fullHour}</span>
            </div>
            <div className="checkRecycleBin">
            {item.completed  ? (
              <BsCheckCircleFill
                onClick={()=> hancleChange(item.uuid)}
                className="checkedIcon"
              />
            ) : (
              <LuCircle onClick={()=> hancleChange(item.uuid)} className="emptycircle" />
            )}
              <BiEditAlt onClick={() => handleEdit(item.uuid, item.text)} className="editIcon" />
              <RiDeleteBin6Line
                onClick={() => handleDelete(item.uuid)}
                className="recycleBin"
              />
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Todo;
