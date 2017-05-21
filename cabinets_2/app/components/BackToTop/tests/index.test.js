import React from 'react';
import { shallow, mount } from 'enzyme';

import BackToTop from '../index';
import Wrapper from '../Wrapper';

const renderComponent = (props = { onClick: () => {} }) => mount(
  <BackToTop {...props} ></BackToTop>
);

describe('<BackToTop />', () => {
  it('should render a wrapper tag', () => {
    const renderedComponent = shallow(<BackToTop onClick={() => {}} />);
    expect(renderedComponent.type()).toEqual(Wrapper);
  });

  it('should handle clicks', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});

describe('<Wrapper />', () => {
  it('should render a div tag', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent.type()).toEqual('div');
  });
});
