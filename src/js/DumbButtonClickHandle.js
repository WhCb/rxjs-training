import React, { Component } from 'react'

// RxJS
import { fromEvent } from 'rxjs'

class DumbButtonClickHandle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subscription: null
    }
  }

  componentDidMount() {
    const $button = document.querySelector('button')
    const myObservable = fromEvent($button, 'click')
    this.setState({
      subscribtion: myObservable.subscribe({ next: event => console.log(event), error: () => {}, complete: () => {} })
    })
  }

  componentWillUnmount() {
    this.state.subscription.unsubscribe()
  }

  render() {
    return (
      <div>
        <button>click</button>
      </div>
    )
  }
}

export default DumbButtonClickHandle