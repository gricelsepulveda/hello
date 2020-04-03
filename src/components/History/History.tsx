import React, {useState, useEffect} from "react"

//Styles
import "./history.scss"

export type HistoryProps = {
  data:  string[]
  section: number
}
const History:React.FunctionComponent<HistoryProps> = (props) => {
  const [page, setPage] = useState(0)
  const [section] = useState(props.section)

  useEffect(() => {
    setTimeout(() => {
      setPage(page + 1 != 3 ? page + 1 : 0)
    }, 10000)
  }, [page])

  return (
    <section className={`history section-${section}`}>
      <div className="text-banner">
        {
          props.data.map((item:any, index:number) => (
            index == page ? (
              <p key={`p_${index}`} className={page == index ? "active" : ""}>
                {item}
              </p>
            )
            : null
          ))
        }
      </div>
      <ul className="text-banner-buttons">
        {
          props.data.map((_item:any, _index:number) => 
            <li key={`${_item}-${_index}`}className={page == _index ? "active" : ""}/>
          )
        }
      </ul>
    </section>
  )
}

export default History