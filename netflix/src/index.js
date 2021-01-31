import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <>
    <div className="cards">
      <div className="card">
        <img src="https://wallpapercave.com/wp/wp4056410.jpg" alt="myPic" className="card_img" />
        <div className="card__info">
          <span className="card__category">A Netflix original Series</span>
          <h3 className="card__title">DARK</h3>
          <a href="" target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
        
    </div>

  </>,
  document.getElementById('root')
);


