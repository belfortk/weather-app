import React from 'react';

import CurrentCity from './CurrentCity';
import Temperature from './Temperature';
import Pressure from './Pressure';
import Humidity from './Humidity';
import LowTemperature from './LowTemperature';
import HighTemperature from './HighTemperature';
import WindSpeed from './WindSpeed';

class CityInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="current-city" className='card'>
        <div className='card-header'>City Information</div>
        <div className='card-block' id='left-card-body'>
          <div className='row'>
            <CurrentCity />
          </div>

          <div className='row'>
            <div className='col-md-12'>
              <div className='row'>
                <Temperature />
                <Pressure />
                <Humidity />
              </div>
              <div className='row'>
                <LowTemperature />
                <HighTemperature />
                <WindSpeed />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CityInformation;
