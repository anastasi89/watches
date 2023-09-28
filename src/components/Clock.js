import React from "react";
import moment from "moment";
import DisplayClock from "./DisplayClock";
import PropTypes from "prop-types";

export default class Clock extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.timeZone = props.timeZone;
    this.nameZone = props.nameZone;
    this.deleteClock = props.deleteClock;
    this.id = props.id;
    this.state = {
      date: moment().utcOffset(Number(this.timeZone)),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(id) {
    clearInterval(this.timerID);
    this.deleteClock(id);
  }

  tick() {
    this.setState({
      date: moment().utcOffset(Number(this.timeZone)),
    });
  }

  delete = this.componentWillUnmount.bind(this);

  render() {
    return (
      <DisplayClock
        time={this.state.date}
        name={this.nameZone}
        id={this.id}
        deleteClick={this.delete}
      />
    );
  }
}

Clock.propTypes = {
  timeZone: PropTypes.string,
  nameZone: PropTypes.string,
  id: PropTypes.string,
  deleteClock: PropTypes.func.isRequired,
};

Clock.defaultProps = {
  timeZone: "",
  nameZone: "",
  id: "",
};
