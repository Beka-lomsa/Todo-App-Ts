import floverBack from "../img/backofimg.png"
import "./HeadTodo.css"
import Data from "../Components/Data"

interface DataInfo {
  fullDateDay:string,
  realTime: string
}

function HeadTodo () {

const {fullDateDay, realTime}:DataInfo = Data()



  return (
    <div className="imgContainer">
      <img className="floverBack" src={floverBack} alt="floverBack" />
      <span className="fullDateDay">{fullDateDay}</span>
      <span className="realTime">{realTime}</span>
    </div>
  )
}

export default HeadTodo