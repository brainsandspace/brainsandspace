import React from 'react';
import { shallow } from 'enzyme';

import NavFooter from '../index';

describe('<NavFooter />', () => {
  it('Expect to have unit tests specified', () => {
    const renderedComponent = shallow(<NavFooter />);
    expect(renderedComponent.find('ul')).toHaveLength(1);
  });
});
