import react from "react";
import date from "../../images/date.png"
import user from "../../images/user.png";
import like from "../../images/like.png";
function CardItem(props) {
  return (
    
      <div className='cards__item'>
        <a className='cards__item__link' href={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}
           style={{ marginRight: 0,
            marginLeft: 0 ,marginTop:0}}>
            <img
              className='cards__item__img'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
          <div className="info-icons">
            <div className=" icon-s"><img className="icon" src={user}/><span className="icon-name" >name </span></div>
            <div className=" icon-s"><img className="icon" src={like}/><span className="icon-name" >33 </span></div>
            <div className=" icon-s"><img className="icon" src={date}/><span className="icon-name" >Date </span></div>
         </div>
         <p className='cards__item__text' href={props.text}>{props.text}</p>
            <div className="tab">
                <span className="round-tab">{props.tag}</span>
                <span className="round-tab">{props.tag}</span>
                <span className="round-tab">{props.tag}</span> 
                </div>
            
          </div>
          <div className="btn"><button>Read more</button></div>
        </a>
      </div>
     
  );
}
export default CardItem;