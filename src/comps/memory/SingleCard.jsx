import './SingleCard.css'

function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return(
        <div className='card'>
            <div className={flipped ? 'flipped' : ''}>
                <img className='front' draggable = 'false' src={card.src} alt="card front" />
                <img className='back' draggable = 'false'
                    src='/img/liftedMemory.png' 
                    onClick={handleClick} 
                    alt="card back" />
            </div>
        </div>
    )
}

export default SingleCard