import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from './component/Login/login'

describe('Test case for testing login',() =>{
  let wrapper;
  test('username check',()=>
  {
  wrapper = shallow(<Login/>);
  wrapper.find('input[type="text"]').simulate('change', {target: {name: 'email', value: 'ashishdev963@gmail.com'}});
  expect(wrapper.state('email')).toEqual('ashishdev963@gmail.com');
  })
  it('password check',()=>{
  wrapper = shallow(<Login/>);
  wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'ashishdev963'}});
  expect(wrapper.state('password')).toEqual('ashishdev963');
  })

    it('login check with wrong data',()=>{
    wrapper = shallow(<Login/>);
    wrapper.find('input[type="text"]').simulate('change', {target: {name: 'email', value: 'ashishdev963@gmail.com'}});
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'ashishdev963'}});
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLogined')).toBe(false);
    })
  })

  describe('Test case for testing signUp',() =>{
    let wrapper;
    test('firstname check',()=>
    {
    wrapper = shallow(<Login/>);
    wrapper.find('input[type="text"]').simulate('change', {target: {name: 'fname', value: 'asdfgh'}});
    expect(wrapper.state('fname')).toEqual('asdfgh');
    })
    test('emailId check',()=>
    {
    wrapper = shallow(<Login/>);
    wrapper.find('input[type="text"]').simulate('change', {target: {name: 'emailId', value: 'ashishdev963@gmail.com'}});
    expect(wrapper.state('emailId')).toEqual('asd@gmail.com');
    })
    test('mobile check',()=>
    {
    wrapper = shallow(<Login/>);
    wrapper.find('input[type="text"]').simulate('change', {target: {name: 'mobile', value: '7412589632'}});
    expect(wrapper.state('mobile')).toEqual('7412589632');
    })
    it('password check',()=>{
    wrapper = shallow(<Login/>);
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'pass', value: '123456'}});
    expect(wrapper.state('pass')).toEqual('123456');
    })
    it('confirm password check',()=>{
      wrapper = shallow(<Login/>);
      wrapper.find('input[type="password"]').simulate('change', {target: {name: 'cpass', value: '123456'}});
      expect(wrapper.state('cpass')).toEqual('123456');
      })
    })
