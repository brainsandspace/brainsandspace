import React from 'react';
import { shallow } from 'enzyme';

import SearchResults from '../index';

describe('<SearchResults />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <SearchResults />
    );
    expect(renderedComponent.contains(
      // <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
