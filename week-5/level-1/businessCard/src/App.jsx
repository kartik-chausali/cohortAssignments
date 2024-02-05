import { useState } from 'react'
import './App.css'
import { Card } from './Components/Card'
import { GetCards } from './Components/GetCards'

function App() {
  const [cards, setCards] = useState([])
  fetch("http://localhost:3000/cards")
  .then(async function (res){
    const json = await res.json();
    setCards(json.cards);
  })
  return (
    <div>
     < Card />
     <GetCards cards={cards}/>
    </div>
  )
}

export default App
