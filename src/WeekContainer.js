import React from 'react';
import DayCard from './DayCard';

class WeekContainer extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps !== this.props) {
      const weatherURL =
        `http://api.openweathermap.org/data/2.5/forecast?q=${nextProps.query}&units=metric&APPID=36501d3f607563f44b61525b129916ee`
      console.log(weatherURL);
      fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
          const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
          this.setState({
            fullData: data.list,
            dailyData: dailyData
          })
        })
    }

  }

  formatDayCards = () => {
    if (this.state.dailyData === null)
      return;
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

  render() {
    return (
      <div className="container">
        <h1 className="card-title text-light m-4">5-Day Forecast</h1>
        <div className="row justify-content-center">

          {this.formatDayCards()}

        </div>
      </div>
    )
  }
}

export default WeekContainer;