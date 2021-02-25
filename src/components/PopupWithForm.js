function PopupWithForm(props) {
  return (
    <div className={`popup popup__${props.name} ${props.isOpen && 'popup_opened'}`} role="dialog" >
      <div className="popup__container">
      <button className="button button_type_close opacity" aria-label="Закрыть" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form popup__form_add-new-card" method="POST" name={props.name} onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit"  className="button popup__button button_type_submit opacity">{props.isLoading ? props.loadingButtonTitle : props.buttonName}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;