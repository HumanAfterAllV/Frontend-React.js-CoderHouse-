import { Link } from "react-router-dom"

const AsideMenu = () => {
  return (
      <aside id="aside">
        <div>

        </div>
        <div className="aside__chl animate__animated animate__slideInLeft">
          <ul className="aside__chl--ul">
            <li className="aside__chl--ul--item"><Link to={"/"}>Home</Link></li>
            <li className="aside__chl--ul--item"><Link to={"/products/shopping"}>Cart</Link></li>
            <li className="aside__chl--ul--item"><Link to={"/"}>Contact</Link></li>
          </ul>
        </div>
        <div className="aside__chl--icon animate__animated animate__slideInLeft">
          <Link to={''}><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMTAuNjY2NjcsMTAuNjY2NjcpIj48cGF0aCBkPSJNOCwzYy0yLjc1NywwIC01LDIuMjQzIC01LDV2OGMwLDIuNzU3IDIuMjQzLDUgNSw1aDhjMi43NTcsMCA1LC0yLjI0MyA1LC01di04YzAsLTIuNzU3IC0yLjI0MywtNSAtNSwtNXpNOCw1aDhjMS42NTQsMCAzLDEuMzQ2IDMsM3Y4YzAsMS42NTQgLTEuMzQ2LDMgLTMsM2gtOGMtMS42NTQsMCAtMywtMS4zNDYgLTMsLTN2LThjMCwtMS42NTQgMS4zNDYsLTMgMywtM3pNMTcsNmMtMC41NTIyOCwwIC0xLDAuNDQ3NzIgLTEsMWMwLDAuNTUyMjggMC40NDc3MiwxIDEsMWMwLjU1MjI4LDAgMSwtMC40NDc3MiAxLC0xYzAsLTAuNTUyMjggLTAuNDQ3NzIsLTEgLTEsLTF6TTEyLDdjLTIuNzU3LDAgLTUsMi4yNDMgLTUsNWMwLDIuNzU3IDIuMjQzLDUgNSw1YzIuNzU3LDAgNSwtMi4yNDMgNSwtNWMwLC0yLjc1NyAtMi4yNDMsLTUgLTUsLTV6TTEyLDljMS42NTQsMCAzLDEuMzQ2IDMsM2MwLDEuNjU0IC0xLjM0NiwzIC0zLDNjLTEuNjU0LDAgLTMsLTEuMzQ2IC0zLC0zYzAsLTEuNjU0IDEuMzQ2LC0zIDMsLTN6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/></Link>
          <Link to={''}><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMTAuNjY2NjcsMTAuNjY2NjcpIj48cGF0aCBkPSJNMTIsMmMtNS41MTEsMCAtMTAsNC40ODkgLTEwLDEwYzAsNS41MTEgNC40ODksMTAgMTAsMTBjNS41MTEsMCAxMCwtNC40ODkgMTAsLTEwYzAsLTUuNTExIC00LjQ4OSwtMTAgLTEwLC0xMHpNMTIsNGM0LjQzMDEyLDAgOCwzLjU2OTg4IDgsOGMwLDQuMDE0NDcgLTIuOTM0NjgsNy4zMTMwMiAtNi43ODEyNSw3Ljg5ODQ0di01LjUxMzY3aDIuMzI4MTNsMC4zNjUyMywtMi4zNjUyNGgtMi42OTMzNnYtMS4yOTI5N2MwLC0wLjk4MyAwLjMyMDIzLC0xLjg1NTQ3IDEuMjQwMjMsLTEuODU1NDdoMS40NzY1NnYtMi4wNjQ0NWMtMC4yNiwtMC4wMzUgLTAuODA4NywtMC4xMTEzMyAtMS44NDU3LC0wLjExMTMzYy0yLjE2NiwwIC0zLjQzNTU1LDEuMTQ0IC0zLjQzNTU1LDMuNzV2MS41NzQyMmgtMi4yMjY1NnYyLjM2NTI0aDIuMjI2NTZ2NS40OTQxNGMtMy43ODQwMSwtMC42MzgwNiAtNi42NTQzLC0zLjkwODY3IC02LjY1NDMsLTcuODc4OTFjMCwtNC40MzAxMiAzLjU2OTg4LC04IDgsLTh6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/></Link>
        </div>
      </aside>
  )
}

export default AsideMenu