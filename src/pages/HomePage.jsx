import { useState } from 'react'
import comicsInfo from "../../src/meta.json"
// import "./App.css"
import { Link } from 'react-router-dom'

function HomePage() {
  console.log(import.meta.url)

  return (
    <>

    <div class = "comics-container">
      {/* <img src = "/underconstruction.png" style = {{width:"25%;"}} class = "under-construction-img" /> */}
        {/* {comicsInfo.map(comic => {
            return (<img key = {comic.id} src = {`/comics/${comic.name}`}/>) 
        })} */}
    </div>
    </>
  )
}

export default HomePage
