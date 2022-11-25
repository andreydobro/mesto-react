
export const Card = ({card, onCardClick}) => {

   const handleClick = () => {
    onCardClick(card)
   }

    return(
        <li class="element">
            <button class="element__back" tupe="button"></button>
            <img className="element__foto" src={card.link} alt={card.name} onClick={handleClick} />
            <h2 className="element__title">{card.name}</h2>
            <div className="element__like-form">
                <button className="element__like" type="button"></button>
                <div className="element__like-count">{card.likes.length}</div>
            </div>
        </li>
    )
}