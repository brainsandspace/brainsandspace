import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import AmazonLogoFooter from 'components/AmazonLogoFooter';
import BackToTop from 'components/BackToTop';
import NavFooter from 'components/NavFooter';
import Footer from '../index';


describe('<Footer />', () => {

  it('should have a BackToTop child', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.find(BackToTop)).toHaveLength(1);
  });

  it('should have a NavFooter child', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.find(NavFooter)).toHaveLength(1);
  });

  it('should have a AmazonLogoFooter child', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.find(AmazonLogoFooter)).toHaveLength(1);
  });
});
