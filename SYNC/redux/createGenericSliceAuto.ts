import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { registerReducer } from '../reducerRegistry';

/**
 * A generic slice creator for reusability across similar features.
 * Automatically registers the reducer with the reducer registry.
 * 
 * @template T - The type of state to manage.
 * @param name - Unique name of the slice.
 * @param initialState - The initial state of the slice.
 * @returns - The slice object with actions and registered reducer.
 */
export function createGenericSlice<T>(name: string, initialState: T) {
  const slice = createSlice({
    name,
    initialState,
    reducers: {
      set(state, action: PayloadAction<T>) {
        return { ...state, ...action.payload };
      },
      reset() {
        return initialState;
      },
      updatePartial(state, action: PayloadAction<Partial<T>>) {
        return { ...state, ...action.payload };
      },
    },
  });

  // Automatically register the reducer
  registerReducer(name, slice.reducer as Reducer);

  return slice;
}
