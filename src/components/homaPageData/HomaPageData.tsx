import { useSelector } from "react-redux"
import { importGoogleFont } from '../../helpers/googleLink';
import { Link } from 'react-router-dom';
import "./HomaPageData.scss"
const HomaPageData = () => {
    const dataSlider= useSelector((state:any) => state.sliderValue.sliderValue)
    const { items } = useSelector((state: any) => state.font.font_data)
    items && importGoogleFont(items)
    console.log('data : ', items);
    const areaValue = useSelector((state:any)=>state.areaValue.textAreaValue)
    const search_value = useSelector((state:any )=> state.font.search_value)
    
    return (
        <div className="home_page-box">
            {
                items?.filter((font: any) => font.family.toLowerCase().indexOf(search_value) !== -1).slice(0, 50).map((elm: any, i: any) =>
                <Link to={`/single/${elm.family}`}>
                    <div className="home_page-item" key={i}>
                        <div className="item_title">
                            <p>{elm.family}</p>
                            <span> | {elm.variants.length} styles</span>
                        </div>               
                        <p className="item_elm" style={{ fontFamily: `${elm.family}, ${elm.category}`, fontSize:`${dataSlider}px` }}>{areaValue.length>0 ? areaValue : "Assalomu Aleykum Axli Bog'dod"}</p>
                    </div>
                  </Link>
                )
            }
        </div>
    )
}

export default HomaPageData