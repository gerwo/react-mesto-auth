import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect, useHistory} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmPopup from './ConfirmPopup';
import api from "../utils/api";
import * as auth from "../utils/auth";
import useEventListener from '@use-it/event-listener';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

import infoTooltipDoneImage from '../images/done-query.svg';
import infoTooltipErrorImage from '../images/error-query.svg';
import InfoTooltip from "./InfoTooltip";

function App() {

  const history = useHistory();

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopup] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopup] = useState(false);
  const [isInfoPopupOpen, setInfoPopupOpen] = useState(false)

  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);


  const [headerUserLogin, setHeaderUserLogin] = useState('');


  const [isInfoTooltipData, setInfoTooltipData] = useState({message : '', image : ''});

  const [currentUser, setCurrentUser] = React.useState(CurrentUserContext);


  function handleLogin({email, password}){
    setLoading(true);

    auth.login({
      email, password
    })
      .then((res) => {

        if(res.token){
          localStorage.setItem('email', email);
          localStorage.setItem('token', res.token);

          setHeaderUserLogin(email);

          setLoggedIn(true);
        }
      })
      .catch(() => {
        setLoggedIn(false);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function handleRegister({email, password}){

    setLoading(true);

    auth.register({
        email, password
      })
      .then((res) => {
        setInfoPopupOpen(true);
        setInfoTooltipDone();

        history.push('/sing-in')
      })
      .catch((err) => {
        setInfoPopupOpen(true);
        setInfoTooltipError()
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function handleSignOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setHeaderUserLogin('');
  }
  
  
  function setInfoTooltipDone() {
    setInfoTooltipData({
      message : 'Вы успешно зарегистрировались!',
      image : infoTooltipDoneImage
    });
    console.log(isInfoTooltipData);
  }

  function setInfoTooltipError() {
    setInfoTooltipData({
      message : 'Что-то пошло не так! Попробуйте еще раз.',
      image : infoTooltipErrorImage
    })

    console.log(isInfoTooltipData);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function handleConfirmClick() {
    setConfirmPopup(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopup(true);
  }

  function handleCardConfirmDelete(card){
    setSelectedCard(card);
    handleConfirmClick();
  }

  function handlePressEsc({ key }) {
    if(key === 'Escape') closeAllPopups()
  }

  function handleLayoutClick(popup) {
    popup.addEventListener('mousedown', evt => {
      evt.target === evt.currentTarget && closeAllPopups();
    });
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImagePopup(false);
    setConfirmPopup(false);
    setInfoPopupOpen(false);

    setTimeout(() => {
      setLoading(false);
      setSelectedCard({});
    }, 700)
  }

  useEffect( () => {
    Promise.resolve(api.getUserInfo())
      .then((data) => {
        setCurrentUser(data);
      });
  }, []);

  useEffect(() => {
    checkTokenInStorage();
    setHeaderUserLogin(localStorage.getItem('mail'))
  }, [])

  useEffect(() => {
    api.getCards()
      .then((data) => {
        setCards(data);
      })
      .catch(error => console.log(error));
  }, []);
  
  function handleAddPlaceSubmit({name, link}) {
    setLoading(true);

    api.addCard({name, link})
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups()
    }).catch(error => console.log(error));
  }

  function checkTokenInStorage(){

    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');

      auth.checkUserToken(token)
        .then(() => {
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleCardDelete() {
    setLoading(true);

    api.deleteCard({cardId : selectedCard._id})
      .then(() => {
        const newCards = cards.filter((c) => c._id !== selectedCard._id);
        
        setCards(newCards);
        closeAllPopups();
        setSelectedCard({});

      }).catch(error => console.log(error));
  }
  
  function handleCardLike(card) {    
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus({cardId : card._id, isLiked: !isLiked})
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        
        setCards(newCards);
      }).catch(error => console.log(error));
  }

  function handleUpdateAvatar({avatar}) {
    setLoading(true);

    api.setUserAvatar({avatar})
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      }).catch(error => console.log(error));
  }

  function handleUpdateUser({name, about}){
    setLoading(true);
    
    api.setUserInfo({name, about})
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      }).catch(error => console.log(error));
  }

  useEventListener('keydown', handlePressEsc);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="root">
          <Header/>
          <main className="main">
            <Switch>
              <ProtectedRoute
                exact
                path='/'
                isLoggedIn={isLoggedIn}
                component={Main}
                onEditProfile={handleEditProfileClick}
                onEditAvatar={handleEditAvatarClick}
                onConfirmClick={handleCardConfirmDelete}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                cards={cards}
              />
              <Route path="/sign-in">
                {
                  isLoggedIn
                  ? <Redirect to="/" />
                  : <Login isLoading={isLoading} onSubmit={handleLogin}
                    />
                }
              </Route>

              <Route path="/sign-up">
                {
                  isLoggedIn
                  ? <Redirect to="/" />
                  : <Register
                      isLoading={isLoading}
                      onSubmit={handleRegister}
                    />
                }
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </main>
          <Footer/>
        </div>
        
        <AddPlacePopup 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups} 
          onLayout={handleLayoutClick}
          onAddPlace={handleAddPlaceSubmit} 
          isLoading={isLoading}/>

        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          onLayout={handleLayoutClick}
          onUpdateAvatar={handleUpdateAvatar} 
          isLoading={isLoading}/> 
        
        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
          onLayout={handleLayoutClick}
          onUpdateUser={handleUpdateUser} 
          isLoading={isLoading}/> 

        <ImagePopup 
          card={selectedCard} 
          isOpen={isImagePopupOpen} 
          onClose={closeAllPopups}
          onLayout={handleLayoutClick}/>

        <ConfirmPopup 
          isOpen={isConfirmPopupOpen} 
          onClose={closeAllPopups}
          onLayout={handleLayoutClick} 
          onConfirm={handleCardDelete}
          handleLayoutClickisLoading={isLoading}/>

        <InfoTooltip
          name="info-tooltip"
          isOpen={isInfoPopupOpen}
          onClose={closeAllPopups}
          onLayout={handleLayoutClick}
          message={isInfoTooltipData.message}
          image={isInfoTooltipData.image}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
