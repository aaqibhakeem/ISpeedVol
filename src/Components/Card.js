import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function Card(props) {
  const [remainingTime, setRemainingTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const eventDate = new Date(props.date); 
    const currentDate = new Date();

    const differenceInSeconds = Math.floor((eventDate - currentDate) / 1000);

    if (differenceInSeconds > 0) {
      const timer = setInterval(() => {
        const newCurrentDate = new Date(); 
        const newDifferenceInSeconds = Math.floor((eventDate - newCurrentDate) / 1000);

        if (newDifferenceInSeconds > 0) {
          const hours = Math.floor(newDifferenceInSeconds / 3600);
          const minutes = Math.floor((newDifferenceInSeconds % 3600) / 60);
          const seconds = newDifferenceInSeconds % 60;

          setRemainingTime({ hours, minutes, seconds });
        } else {
          clearInterval(timer); 
          setRemainingTime({ hours: 0, minutes: 0, seconds: 0 });
        }
      }, 1000);

      return () => clearInterval(timer);
    } else {
      
      setRemainingTime({ hours: 0, minutes: 0, seconds: 0 });
    }
  }, [props.date]);

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={props.image} alt="event-img" />
      </div>
      <div className='card-event'>
        <h3>{props.event}</h3>
      </div>
      <div className='card-description'>
        <p>{props.description}</p>
      </div>
      <hr />
      <div className="venue-date">
        <p id="venue">Venue : {props.venue}</p>
        <p id="date">Date: {props.date}</p>
      </div>
      <div className="btn-apply">
        <Link to="/" className="btn btn-dark">APPLY</Link>
      </div>
      <div className="timer">
        <p>Time Remaining: {remainingTime.hours} hours, {remainingTime.minutes} minutes, {remainingTime.seconds} seconds</p>
      </div>
    </div>
  );
}

export default Card;
