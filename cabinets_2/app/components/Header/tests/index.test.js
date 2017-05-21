import React from 'react';
import { shallow } from 'enzyme';

import NavCategory from 'components/NavCategory';
import NavTop from 'components/NavTop';

import Header from '../index';

// import NavCategory from 'components/NavCategory';

describe('<Header />', () => {
  it('should have a NavCategory component', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.find(NavCategory)).toHaveLength(1);
  });

  it('should have a NavTop component', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.find(NavTop)).toHaveLength(1);
  });
});
