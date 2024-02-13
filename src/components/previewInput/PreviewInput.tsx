import { AreaValue } from "../../redux/slice/textAreaSlice"
import "./PreviewInput.scss"
import { useDispatch } from "react-redux"
const PreviewInput = () => {
  const dispatch = useDispatch()

  
  return (
    <div>
      <textarea onChange={(e)=> {dispatch(AreaValue(e.target.value))}} className="textArea" placeholder="Type something" name="text" id="1">
      </textarea>
    </div>
  )
}

export default PreviewInput