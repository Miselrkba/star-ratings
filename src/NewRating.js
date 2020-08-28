import React from "react";
import { NewStar } from "./NewStar";

class NewRating extends React.Component {
  static defaultProps = { max: 5 };
  constructor(props) {
    super(props);
    this.state = {
      dynamicValue: props.stars,
      value: 0,
    };

    this._colors = {
      1: "#f44336",
      2: "#FF5722",
      3: "#FF9800",
      4: "#FFC107",
      5: "#FFEB3B",
    };
    this._meanings = {
      0: "No Rating 🚫",
      1: "Terrible 🤮",
      2: "Mediocre 😒",
      3: "Average 😐",
      4: "Solid 🙂",
      5: "Fantastic 🔥",
    };
  }

  handleClick = (newValue) => {
    this.setState({
      dynamicValue: newValue,
      value: newValue,
    });
  };

  handleMouseEnter = (newValue) => {
    this.setState({
      dynamicValue: newValue,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      dynamicValue: this.state.value,
    });
  };

  render() {
    const { dynamicValue, value } = this.state;
    const starSpans = [];
    const max = this.props.max;
    let count = dynamicValue;

    for (let v = 1; v <= max; v++) {
      starSpans.push(
        <NewStar
          key={v}
          color={this._colors[count]}
          isFilled={v <= dynamicValue}
          value={v}
          handleClick={this.handleClick}
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}
        />
      );
    }

    return (
      <div>
        <p>{this._meanings[value]}</p>
        {starSpans}
      </div>
    );
  }
}

export default NewRating;
