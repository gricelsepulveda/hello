import React, {useState} from "react"

//Styles
import "../styles/home.scss"

//Components
import History from "../components/History/History"
import NavHistory from "../components/NavHistory/NavHistory"
import Switch from "../components/Switch/Switch"

//Data
import { textDataEN, textDataES } from "./textData"

const Home:React.FunctionComponent = () => {

  const [textData, setTextDAta] = useState(textDataES)
  const [section, setSection] = useState(0)
  const [trick, setTrick] = useState([""])

  const setLang = (lang:string) => {
    if (lang == "es"){
      setTextDAta(textDataES)
    }
    else {
      setTextDAta(textDataEN)
    } 
  }

  const handleSection = (ind:number) => {
    setSection(ind)
    let count = ind
    let i:number
    let newArr:any[] = []
    for (i=0; i <= count; i++){
      newArr.push("")
    }
    setTrick([...newArr])
  }

  return (
    <>
      <nav className="navbar">
        <span>follow me in social media</span>
        <ul className="social-media">
          <li className="social-media-link linkedin">
            <a href="https://cli.re/921ozd" target="_blank">
              <button></button>
            </a>
          </li>
          <li className="social-media-link instagram">
            <a href="https://cli.re/921ozd" target="_blank">
              <button></button>
            </a>
          </li>
          <li className="social-media-link twitter">
            <a href="https://cli.re/7XB2Wr" target="_blank">
              <button></button>
            </a>
          </li>
          <li className="social-media-link whatsapp">
            <a href="https://cli.re/yZVKAr" target="_blank">
              <button></button>
            </a>
          </li>
          <li className="social-media-link facebook">
            <a href="https://m.me/gricel.sepulveda.rozas" target="_blank">
              <button></button>
            </a>
          </li>
        </ul>
      </nav>
      <section className="presentation">
        <img src="https://gricel.sfo2.digitaloceanspaces.com/iusedtohatecode/iuthc-logo.svg" className="logo"/>
        <h2>Hello! I'm Gricel and</h2>
        <h1>I used to hate code</h1>
      </section>
      { 
        trick.map((item, index) =>
          index == trick.length - 1 ? 
          <History section={section} key={index} data={textData[section]}/>
          : null
        )
      }
      <div className="banner-loader">
        <span></span>
      </div>
      <NavHistory data={["Early times", "UX/UI", "Developer"]} handler={handleSection}/>
      <div className="language-selector">
        <span>Idioma/Language:</span>
        <Switch active={false} onClick={() => setTextDAta(textData == textDataEN ? textDataES : textDataEN )} disabled={false} size=""/>
      </div>
    </>
  )
}

export default Home