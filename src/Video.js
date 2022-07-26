import React from 'react';

export class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <video src={this.props.src} controls autostart autoPlay muted />
      </div>
    );
  }
}