/**
*
* BackToTop
*
*/
/*
import React, { PropTypes } from 'react';

import Wrapper from './Wrapper';

class BackToTop extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    onClick: PropTypes.func,
  }

  render() {
    return (
      <Wrapper onClick={this.props.onClick} >
        <p>Back to top</p>
      </Wrapper>
    );
  }
}

export default BackToTop;*/



import React, { PropTypes } from 'react';

import Wrapper from './Wrapper';

function BackToTop(props) { // eslint-disable-line react/prefer-stateless-function
  return (
    <Wrapper onClick={props.onClick} >
      <p>Back to top</p>
    </Wrapper>
  );
}
BackToTop.propTypes = {
  onClick: PropTypes.func,
};

export default BackToTop;
