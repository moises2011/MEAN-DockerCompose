import React from 'react';
import Enzyme,{ shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import ConnectedDashboard, { Dashboard } from '../../src/app/scenes/Dashboard/index';
import Post from '../../src/app/components/Post';
import { navigate } from '../../src/app/actions/menu';

Enzyme.configure({ adapter: new Adapter() });

describe('>>>D A S H B O A R D --- redux props',()=>{
    let wrapper;
    beforeEach(()=>{ 
        wrapper = shallow(<Dashboard/>);   
    })

    it('+++ render .dashboard__container - div', () => {
        expect(wrapper.find('.dashboard__container')).toHaveLength(1);
    });
    it('+++ render 5 <Post/>', () => {
        expect(wrapper.find(Post)).toHaveLength(5);
    });
    it('+++ 4th <Post/> have 2 buttons', () => {
        expect(wrapper.find(Post).find('button')).toHaveLength(2);
    });
});

describe('>>>D A S H B O A R D --- passing the store',()=>{
    const initialState = {page: 'DASHBOARD'};
    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedDashboard store={store}/> )  
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });
});

describe('>>>D A S H B O A R D --- integration tests',()=>{
    const initialState = {page: 'DASHBOARD'};
    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedDashboard store={store}/> )  
    })
/*
    it('+++ check action on dispatching ', () => {
        let action
        store.dispatch(navigate({TYPE: 'NAVIGATE', page: 'PROFILE'}));
        action = store.getActions();
        expect(action[0].type).toBe("ADD_INPUTS")
        expect(action[1].type).toBe("SUBTRACT_INPUTS")
    });*/
});

