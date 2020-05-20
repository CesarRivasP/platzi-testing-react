
import React from 'react';
import Hello from '../components/hello';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('Añadiendo pruebas a React', () => {
  test('Comprobamos el texto que recibe la prop', () => {
    const data = {
      title: 'Hello Jest'
    };

    const wrapper = mount(
      <Hello title={data.title} />
    );

    const htmlTag = wrapper.find('h1');

    expect(htmlTag.text()).toBe('Hello Jest');
  });

  test('Creamos un snapshot en React', () => {
    const data = { 
      title: 'Hello Jest'
    };

    const wrapper = shallow(
      <Hello title={data.title} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});