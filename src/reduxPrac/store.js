
import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './slices/counter'; // Import the counter reducer
// import counterSlice from './slices/counter';
import counterSlice from './slices/authentication';

// console.log(counterReducer)
export const store = configureStore({
    reducer: {
        authentication: counterSlice.reducer,
    },
});
