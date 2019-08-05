import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';

// Custom Components
import DumbButtonClickHandle from './DumbButtonClickHandle'
import BasicMappingAndFilter from './BasicMappingAndFilter'

ReactDOM.render(
  <Fragment>
    <DumbButtonClickHandle />
    <BasicMappingAndFilter />
  </Fragment>,
  document.getElementById('root')
)