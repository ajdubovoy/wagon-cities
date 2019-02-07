import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities, setActiveCity } from '../actions';
import City from './city';

function mapStateToProps(state) {
  return {
    cities: state.cities,
    activeCity: state.activeCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities, setActiveCity },
    dispatch
  );
}

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="city-list">
        {this.props.cities.map((city) => {
          return (
            <div className="list-group-item">
              <City city={city} onClick={() => this.props.setActiveCity(city)} key={city.name} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
