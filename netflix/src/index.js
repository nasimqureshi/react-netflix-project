import React from 'react';
import ReactDOM from 'react-dom';
function Card(props){
  return(
    
<div className="cards">
  <div className="card">
    <img src={props.imgsrc} alt="myPic" className="card_img" />
    <div className="card__info">
      <span className="card__category">{props.title}</span>
      <h3 className="card__title">{props.sname}</h3>
      <a href={props.link} target="_blank">
        <button>Watch Now</button>
      </a>
    </div>
  </div>
    
</div>

  )
}


ReactDOM.render(
  <>
<Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
title="A Netflix Original Series"
 sname='DARK' 
link="https://www.netflix.com/in/title/80990668?source=35"
 />

<Card  imgsrc="https://www.hitc.com/static/uploads/htcn/1816/extracurricular_netflix_780_.jpg"
title="extra curricular"
 sname='extra curricular' 
link="https://www.netflix.com/in/title/80990668?source=35"/>

<Card  imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
title="Stranger Thins"
 sname='Stranger Things' 
link="https://www.netflix.com/in/title/80990668?source=35"/>
 </>,
  document.getElementById('root')
);


