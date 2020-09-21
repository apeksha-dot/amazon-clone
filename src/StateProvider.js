import React ,{createContext, useContext, useReducer} from 'react';

//Prepares data layer
export const StateContext = createContext();

//Wraps up the app and provide the data layer 
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//pulls info from data layer
export const useStateValue = () => useContext(StateContext);