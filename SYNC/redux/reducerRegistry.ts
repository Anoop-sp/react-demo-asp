import { combineReducers, Reducer } from '@reduxjs/toolkit';

interface ReducerRegistry {
  [key: string]: Reducer<any>;
}

const reducers: ReducerRegistry = {};

/**
 * Combines all registered reducers dynamically into a root reducer.
 * 
 * @returns The combined root reducer.
 */
export const createRootReducer = () => combineReducers(reducers);

/**
 * Registers a new reducer dynamically by name.
 * 
 * @param name - The unique key for the reducer.
 * @param reducer - The reducer function to register.
 */
export const registerReducer = (name: string, reducer: Reducer<any>) => {
  if (!reducers[name]) {
    reducers[name] = reducer;
  }
};
