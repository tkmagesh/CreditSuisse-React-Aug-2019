import MyComponent from './myComponent';
import { shallow } from 'enzyme';
import React from 'react';

it('should render correctly with no props', () => {
  const component = shallow(<MyComponent/>);
  
  expect(component).toMatchSnapshot();
});

it('should change the state when the button is clicked', () =>{
	const component = shallow(<MyComponent/>);
	component
		.find('input#button1')	
		.simulate('click');

	expect(component.state('message')).toEqual('Button clicked');
})


test('should set the given props', () =>{
	const component = shallow(<MyComponent xyz="100"/>);
	expect(component.instance().props.xyz).toEqual('100');
})