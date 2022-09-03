import {createAsyncThunk} from '@reduxjs/toolkit';

import listSlice from 'redux/list/list.slice';
import {AppDispatch} from 'types/store';
import {Filter} from 'types/filter';

const listActions = {
    reset: () => (dispatch: AppDispatch) => {
        dispatch(listSlice.actions.reset());
    },
    getMovieList: createAsyncThunk(
        'list/getMovieList',
        async (params: Filter, {rejectWithValue}) => {
            try {
            } catch (error) {
                return rejectWithValue(error);
            }
        }
    )
};

export default listActions;