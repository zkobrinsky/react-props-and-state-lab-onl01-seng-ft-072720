import React from 'react'

class Pet extends React.Component {

  capitalize = (word) => {
    return (
      word.charAt(0).toUpperCase() + word.slice(1)
    )
  }

  renderGender = () => {
    return this.props.pet.gender === "male" ? '♀' : '♂';
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.renderGender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.capitalize(this.props.pet.type)}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
