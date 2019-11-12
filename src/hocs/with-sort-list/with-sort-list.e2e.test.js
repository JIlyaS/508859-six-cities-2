import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withSortList from './with-sort-list';

Enzyme.configure({adapter: new Adapter()});

// const MockComponent = () => <div></div>;
const MockComponentWrapped = withSortList(<div />);

describe(`withSortList HOC work correct`, () => {
  it(`SortList component is close`, () => {
    const wrapper = mount(MockComponentWrapped);

    expect(wrapper.state().isSortOpened).toEqual(false);
  });
});
