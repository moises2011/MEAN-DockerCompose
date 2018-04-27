import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Post from '../../src/app/components/Post';

Enzyme.configure({ adapter: new Adapter() });

describe('>>>P O S T --- render childs',()=>{
    let wrapper;
    beforeEach(()=>{ 
        wrapper = shallow(<Post>Hola</Post>);   
    })

    it('+++ render .Post - div', () => {
        expect(wrapper.find('.Post')).toHaveLength(1);
    });
    it('+++ render text contain', () => {
        expect(wrapper.contains('Hola')).toBe(true);
    });
});