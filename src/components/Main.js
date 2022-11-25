import React, { useEffect, useState } from "react";
import { api } from '../utils/api';
import { Card } from "./Card";

export const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

useEffect( () => {
    const promises = [api.getUserInfo(), api.getInitialCards()]

    Promise.all(promises)
      .then(([userData, CardsData]) => {
        setUserName(userData.name)
        setUserDescription(userData.about)
        setUserAvatar(userData.avatar)
        setCards(CardsData)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
    })

  }, [])

    return (
        <main className="main">
      <section className="profile">
        <div className="profile__content">
          <img
          style={{ backgroundImage: `url(${userAvatar})` }}
            src={userAvatar}
            className="profile__avatar"
            alt="фото пользователя"
            onClick={onEditAvatar}
          />
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button profile__edit-button_opened"
              type="button" onClick={onEditProfile}
            />
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button profile__add-button_opened"
          type="button" onClick={onAddPlace}
        />
      </section>
      <ul className="elements">
      {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick} />
        ))}
      </ul>
    </main>
    )
}