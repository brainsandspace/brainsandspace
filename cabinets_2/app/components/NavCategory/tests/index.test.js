import React from 'react';
import { shallow } from 'enzyme';

import NavCategory from '../index';

describe('<NavCategory />', () => {
  it('should have a ul', () => {
    const renderedComponent = shallow(<NavCategory />);
    expect(renderedComponent.find('ul')).toHaveLength(1);
  });
});
