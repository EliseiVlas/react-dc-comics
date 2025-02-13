import NavBar from "./banner-main/nav_bar_links"

export default function Header(props) {

    return (
    <header>
        <div className ="container-header">
            <div className="logo">
                <img src="./public/dc-logo.png" alt="" />
            </div>
            <NavBar linkProp={props}/>
      </div>
    </header>
    )
}