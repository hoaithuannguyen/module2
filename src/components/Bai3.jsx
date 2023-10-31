import React, { Component } from 'react'

export default class Bai3 extends Component {
  render() {
    const date = new Date();

    return (
      <>
        <div>Bây giờ là: {date.toLocaleTimeString()}
        </div>
      </>
    )
  }
}
