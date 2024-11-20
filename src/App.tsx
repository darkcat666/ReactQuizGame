import { useState } from 'react';
import './App.css';
import View from './components/view';

const App = () => {
  const [pages, setPages] = useState("Title")

  const backtoThePast = (pages: string) => {
    switch (pages) {
      case "NoneMoveOn":
        setPages("Title")
        break
      case "Title":
        setPages("NoneBack")
        break
      case "SexGame":
        setPages("Title")
        break
      case "Result":
        setPages("SexGame")
        break
      case "NoneBack":
        setPages("NoneBack")
        break
    }
  }
  
  const moveOnToThePast = (pages: string) => {
    switch (pages) {
      case "NoneBack":
        setPages("Title")
        break
      case "Title":
        setPages("SexGame")
        break
      case "SexGame":
        setPages("Result")
        break
      case "Result":
        setPages("None")
        break
      case "NoneMoveOn":
        setPages("NoneMoveOn")
        break  
      }
  }

  return (
    <>
      <View page={pages}/>
      <button onClick={() => backtoThePast(pages)}>back</button>
      <button onClick={() => moveOnToThePast(pages)}>move on</button>
    </>
  )
}

export default App;