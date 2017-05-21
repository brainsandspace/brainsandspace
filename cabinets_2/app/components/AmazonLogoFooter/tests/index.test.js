import React from 'react';
import { shallow } from 'enzyme';

import AmazonLogoFooter from '../index';
import Wrapper from '../Wrapper';

describe('<AmazonLogoFooter />', () => {
  it('should render a Wrapper tag', () => {
    const renderedComponent = shallow(<AmazonLogoFooter />);
    // console.log('the rendered component', renderedComponent);
    expect(renderedComponent.type()).toEqual(Wrapper);
  });
});


describe('<Wrapper />', () => {
  it('should render a Wrapper tag', () => {
    const renderedComponent = shallow(<Wrapper />);
    // console.log('the rendered component', renderedComponent);
    expect(renderedComponent.type()).toEqual('div');
  });
});
