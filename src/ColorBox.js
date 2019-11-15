import React from 'react';

export default class ColorBox extends React.Component {
  
  render() {
    const opacity = this.props.opacity 
    return (
      <div className="color-box" style={{opacity}}>
        {opacity >= 0.2 ? <ColorBox opacity={opacity - 0.1} /> : null}
      </div>
    )
  }
  
}
