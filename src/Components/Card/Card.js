import React from 'react'
import "./Card.css"
import CardItem from "./cardItem"

import image1 from "../../images/image.jpg";
/**
 * 
* @author
* @function Card

**/

const Card
 = (props) => {
  return(
    <div className="card_main_cot">
        <div className="card_cot cot">
            <div className="post">
                <header className="header">
                    <h2 class="block_title h3" style={{marginLeft:10}}>
                    You might also enjoy
                    </h2>
                </header>
                <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
            <CardItem
              src={image1}
              text='Why You Should Learn R for Data Science?'
              label='Competetive Programming'
              path=''
              tag="Designing"
            />
            <CardItem
              src={image1}
              text='Top 30 Hadoop Interview Questions You Must Prepare'
              label='Code Studio'
              path=''
              tag="Designing"
            />
             <CardItem
              src={image1}
              text='10 Data Scientist Skills You Need in 2021'
              label='Code Studio'
              path=''
              tag="Designing"
            />
             <CardItem
              src={image1}
              text='10 Data Scientist Skills You Need in 2021'
              label='Code Studio'
              path=''
              tag="Designing"
            />
          </div>
          </div>
        </div>
      </div>
</div>
    </div>
    </div>
   )

 }

export default Card;
