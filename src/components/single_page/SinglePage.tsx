import "./SinglePage.scss"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"



const API_KEY: string = "AIzaSyC_5xaFYfJk5kV7ozbi0uBLRqhv_4kNrRs"
const SinglePage = () => {
  const [singleDate, setSingleDate] = useState([]);

  const { id } = useParams()
  useEffect(() => {
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&family=${id}`)
      .then(response => response.json())
      .then(data => setSingleDate(data.items))
  }, [])
  console.log(singleDate);
  const areaValue = useSelector((state: any) => state.areaValue.textAreaValue)
  const dataSlider = useSelector((state: any) => state.sliderValue.sliderValue)

  return (
    
    <div>   
      {
        singleDate && singleDate.map((elm: any, i: number) => (
          <div className="single_page_box" key={i}>
            <div className="single_page-title">
              <h1>{elm.family}</h1>
            </div>
            <div className="home_page-item" key={i}>
              <div className="item_title">
                {/* <p>{elm.family}</p> */}
              </div>
              <p className="item_elm" style={{ fontFamily: `${elm.family}, ${elm.category}`, fontSize: `${dataSlider}` }}>{areaValue.length > 0 ? areaValue : "Assalomu Aleykum Axli Bog'dod"}</p>
            </div>
            <div >
              {
                elm.variants.map((elmI: any) => (
                  <div className="single_item">
                    <b>{elmI}</b>
                    <p style={{fontSize:`30px`, fontFamily: `${elm.family},${elmI}`, fontWeight:`${elmI}` }}>dovudbek</p>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default SinglePage