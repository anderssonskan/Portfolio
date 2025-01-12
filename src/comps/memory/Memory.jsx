import { useEffect, useState } from 'react'
import './Memory.css'
import SingleCard from './SingleCard'

const cardImages = [
  {'src': '/img/emma (3).jpg', matched: false },
  {'src': '/img/septum.jpg', matched: false },
  {'src': '/img/bar.png', matched: false },
  {'src': '/img/usch.png', matched: false },
  {'src': '/img/plugg.jpg', matched: false },
  {'src': '/img/solhatt.jpg', matched: false },
  {'src': '/img/blekt.jpg', matched: false },
  {'src': '/img/kvall.jpg', matched: false },
  
]

function Memory() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  


    //shuffle cards
    const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }))

      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffledCards)
      setTurns(0)
    }

   //handle a choice
   const handleChoice = (card) => {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
       setCards(prevCards => {
        return prevCards.map(card => {
          if (card.src === choiceOne.src) {
            return {...card, matched: true}
          } else{
            return card
          }
        })
       })
        resetTurn()
      } else {
        
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  // reset choices & increase turn
    const resetTurn = () => {
      setChoiceOne(null)
      setChoiceTwo(null)
      setTurns(prevTurns => prevTurns + 1)
      setDisabled(false)
    }

    // start a new game automagically
    useEffect(() => {
      shuffleCards()
    }, [])

    return (
    <div className='memory'>
      <h1>EmmaMemo</h1>
        <button className='memory-btn' onClick={shuffleCards}>New game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard 
          key={card.id} 
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
          />
        ))}  
      </div>  
      <p>Turns: {turns}</p>
    </div>
  )
}

export default Memory;
