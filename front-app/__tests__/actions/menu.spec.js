import { navigate } from '../../src/app/actions/menu';

describe('>>>A C T I O N --- Test calculatorActions',()=>{
    it('+++ actionCreator setSearch', () => {
        const page = 'CHARACTERS';
        const action = navigate(page);
        expect(action).toEqual({type:'NAVIGATE',  page});
    });
});