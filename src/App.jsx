import { useState } from 'react'
import comicsInfo from "../public/comics/meta.json"
import "./App.css"

function App() {
  console.log(import.meta.url)

  return (
    <>
    <header>
      
    </header>
    <nav>
      <a href = "">
        Home
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
