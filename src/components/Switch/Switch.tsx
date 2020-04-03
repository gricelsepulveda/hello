import React, {useState} from "react"

//Styles
import './switch.scss'
export interface PropsSwitch {
    active: boolean,
    onClick: (el: boolean) => void,
    disabled: boolean,
    size: "mini" | ""
}

const Switch:React.FunctionComponent<PropsSwitch> = (props) => {
    const [active, setActive] = useState(props.active != undefined ? props.active: false)
    const handleSwitch = () => {
        setActive(!active)
        if (props.onClick != undefined) {
            props.onClick(active)
        }
    }

    return (
        <div className={`switch ${props.disabled} ${props.size ? props.size : ""} ${active == true ? "active" : ""}`} onClick={()=> handleSwitch()}>
            <button type="button" disabled={props.disabled == true ? props.disabled : false} ></button>
        </div>
    )
}

export default Switch