import React from 'react';

function Card(props) {

    function handleLikeClick() {
        props.onCardLike(props.card.id);
    }
    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }

    const isLiked = props.card.isLiked;
    const cardLikeButtonClassName = `elements-grid__like${isLiked ? '_active' : ''}`
    
    return (
        <li className="elements-grid__item">
            <div className="elements-grid__img-container">
                <img className="elements-grid__image" src={props.cardLink} alt={props.cardName} />
            </div>
            <button aria-label="Удалить" type="button" className="elements-grid__delete_active" onClick={handleDeleteClick}></button>
            <div className="elements-grid__text">
                <h2 className="elements-grid__title">{props.cardName}</h2>
                <div className="elements-grid__like-container">
                    <button aria-label="Лайк" type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <h2 className="elements-grid__like-number">{props.cardLikes}</h2>
                </div>
            </div>
        </li>
    )

}

export default Card;