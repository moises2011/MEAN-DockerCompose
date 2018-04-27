import { NAVIGATE } from '../../src/app/constants';
import menuReducer from '../../src/app/reducers/menu';

describe('>>>R E D U C E R --- Test searchReducers',()=>{

    it('+++ reducer for NAVIGATE', () => {
        const page = 'PROFILE';
        const state = menuReducer([],{type: NAVIGATE, page});
        expect(state.page).toEqual(page);
    });
});