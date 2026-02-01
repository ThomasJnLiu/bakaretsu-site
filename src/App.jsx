import { useState } from 'react'
import comicsInfo from "../public/comics/meta.json"
import "./App.css"

function App() {
  console.log(import.meta.url)

  return (
    <>
    <header>
      <a>BAKARETSU</a>
    </header>
    <nav>
      <a href = "">
        HOME
      </a>
      <a href = "">
        ARCHIVE
      </a>
      <a href = "">
        ABOUT
      </a>
    </nav>
    <div class = "comics-container">
      {/* <img src = "/underconstruction.png" style = {{width:"25%;"}} class = "under-construction-img" /> */}
        {comicsInfo.map(comic => {
          if(comic.id > 20){
            return (<img key = {comic.id} src = {`/comics/${comic.name}`}/>)
          }
        })}
    </div>
    </>
  )
}

export default App
