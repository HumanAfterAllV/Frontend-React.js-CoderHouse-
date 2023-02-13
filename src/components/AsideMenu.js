import { Link } from "react-router-dom"

const AsideMenu = () => {
  return (
      <aside id="aside">
        <div>

        </div>
        <div className="aside__chl animate__animated animate__slideInLeft">
          <ul className="aside__chl--ul">
            <li className="aside__chl--ul--item"><Link to={"/"}>Home</Link></li>
            <li className="aside__chl--ul--item"><Link to={"/"}>Blog</Link></li>
            <li className="aside__chl--ul--item"><Link to={"/"}>Contact</Link></li>
          </ul>
        </div>
        <div  className="aside__icon--container">
          
        </div>
      </aside>
  )
}

export default AsideMenu