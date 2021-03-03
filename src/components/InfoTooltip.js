
function  InfoTooltip(props) {

  return (
    <div className={`popup popup__${props.name} ${props.isOpen && 'popup_opened'}`} role="dialog" onClick={props.onLayout}>
      <div className="popup__container">
        <img src={props.image}/>
        <p>{props.message}</p>
      </div>
    </div>
  )
}

export default InfoTooltip;