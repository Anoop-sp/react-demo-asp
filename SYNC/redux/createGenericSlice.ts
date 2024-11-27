import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * A generic slice creator for reusability across similar features.
 * @template T - The type of state to manage.
 * @param name - Unique name of the slice.
 * @param initialState - The initial state of the slice.
 * @returns - A slice with generic set, reset, and updatePartial reducers.
 */
export function createGenericSlice<T>(name: string, initialState: T) {
  return createSlice({
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
}
