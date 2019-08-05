import React, { Component } from 'react'

// RxJS
import { of } from 'rxjs'
import { map, filter } from 'rxjs/operators'

class BasicMappingAndFilter extends Component {
  componentDidMount() {
    // Map 
    const mapSource = of(1, 2, 3, 4, 5)
    const mapSubscription = mapSource
      .pipe(
        map(value => value + 1)
      )
      .subscribe(value => console.log(`map - ${value}`))

    mapSubscription.unsubscribe()

    // Filter
    const filterSource = of(1, 2, 3, 4, 5)
    const filterSubscription = filterSource
    .pipe(
      filter(value => value >= 2)
    )
    .subscribe(value => console.log(`filter - ${value}`))

    filterSubscription.unsubscribe()
  }

  render() {
    return (
      <div>
        <hr />
        Check console for mapped and filtered results
      </div>
    )
  }
}

export default BasicMappingAndFilter