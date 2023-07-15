import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
//import rootReducer from './reducers'; // Import your other reducers
import authReducer from './slices/authSlice';
import allData from './slices/dataSlice';

export const store = configureStore({
  reducer: {
    // rootReducer, // Add your other reducers here
    auth: authReducer,
    allData: allData,
  },
  middleware: [...getDefaultMiddleware(), thunk],
});

// export default function App() {
//   return (
//     <Provider store={store}>
//       {/* Your app component */}
//     </Provider>
//   );
// }
