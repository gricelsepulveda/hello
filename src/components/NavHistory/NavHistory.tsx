import React, {useState} from "react"

//Styles
import "./nav-history.scss"

export type NavHistoryProps = {
  data:  string[],
  handler: (number:number) => void,
}
const NavHistory:React.FunctionComponent<NavHistoryProps> = (props) => {
  const [active, setActive] = useState(0)

  const changeSection = (index:number) => {
    setActive(index)
    props.handler(index)
  }
  return (
    <nav className="nav-history">
      <ul>
        {
          props.data.map((item, index) => 
            <li key={`${item}-${index}`} className={`${active == index ? "active" : ""}`}>
              <button type="button" onClick={() => changeSection(index)}/>
              <p>{item}</p>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default NavHistory
