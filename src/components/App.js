import '../index';
import { Header } from './Header';
import { Main } from './Main'
import { Footer } from './Footer'
import { useState } from 'react';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';

export const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({})

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({})
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        name={'edit'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        btnName={'Сохранить'}
        title={'Редактировать профиль'} >
        <label className="popup__label">
          <input
            id="nameuser"
            className="popup__input_name_edit popup__input"
            defaultValue=""
            name="name"
            type="text"
            minLength={2}
            maxLength={40}
            required=""
            placeholder="Имя"
          />
          <span id="nameuser-error" className="popup__error" />
        </label>
        <label className="popup__label">
          <input
            id="aboutuser"
            className="popup__input_about_edit popup__input"
            defaultValue=""
            name="about"
            type="text"
            minLength={2}
            maxLength={200}
            required=""
            placeholder="О себе"
          />
          <span id="aboutuser-error" className="popup__error" />
        </label>
      </PopupWithForm>
      <PopupWithForm
       name={'add'}
       isOpen={isAddPlacePopupOpen}
       onClose={closeAllPopups}
       btnName={'Сохранить'}
       title={'Новое место'}>
      <label className="popup__label">
              <input
                id="name"
                className="popup__input_name_add popup__input popup__input_name_edit"
                defaultValue=""
                name="name"
                type="text"
                placeholder="Название"
                required=""
                minLength={2}
                maxLength={30}
              />
              <span id="name-error" className="popup__error">
                Заполните поле
              </span>
            </label>
            <label className="popup__label">
              <input
                id="url"
                className="popup__input_about_add popup__input"
                defaultValue=""
                name="link"
                type="url"
                placeholder="Ссылка на картинку"
                required=""
              />
              <span id="url-error" className="popup__error">
                Заполните поле
              </span>
            </label>
      </PopupWithForm>
      <PopupWithForm
      name={'avatar'}
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      btnName={'Сохранить'}
      title={'Обновить аватар'}>
            <label className="popup__label">
              <input
                id="avatar"
                className="popup__input_name_add popup__input popup__input_name_edit popup__input_avatar"
                defaultValue=""
                name="avatar"
                type="url"
                placeholder="Ссылка на картинку"
                required=""
              />
              <span id="avatar-error" className="popup__error">
                Заполните поле
              </span>
            </label>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
      <section className="popup popup-confirm">
        <div className="popup__content popup__content-delete">
          <h2 className="popup__title">Вы увеерены?</h2>
          <button
            className="popup__icon-close popup__icon-close_add"
            type="button"
          />
          <form className="popup__form popup__form-add" noValidate="">
            <button
              className="popup__button-save popup__button-save_add popup__button-save_confirmation"
              type="submit"
            >
              Да
            </button>
          </form>
        </div>
      </section>
      <template className="template" />
      {/**/}
    </>

  );
}

export default App;
