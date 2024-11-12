import { Watch } from "./Watch"

export const Watches = ({data, handleClose}) => {
    return(
        <div className="watches-list"> {data.map((elem, idx) => {
            return(
                <div key={'div-list-' + elem.city + elem.offset} className="conbut">
                    <div key={'close-' + elem.city + elem.offset} className="close-btn" onClick={(e) => {handleClose(e,idx)}}>X</div>
                    <Watch key={elem.city+elem.offset} city={elem.city} offset={elem.offset}/>
                </div>
            )
        })}

        </div>
    )
}