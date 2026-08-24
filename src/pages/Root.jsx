import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom'

function RootLayout(){
    return <>
        <header>
      <img class = "header-img" src = "/bakaretsu.png"/>
      <a>BAKARETSU</a>
    </header>
    <nav>
      <Link to = "/">
        HOME
      </Link>
      <Link to = "/archive">
        ARCHIVE
      </Link>
      <a href = "/about">
        ABOUT
      </a>
    </nav>
    <Outlet/>
    </>
}

export default RootLayout;