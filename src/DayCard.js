import React from 'react';
var moment = require('moment');

const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)


  return (
    <div className="col-sm-auto">
      <div className="card rounded-10 w-100 h-100 m-1 p-1 bg-dark text-light">
        <h3 className="card-title pt-1">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
        <h2>{Math.round(reading.main.temp)} °C</h2>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DayCard;