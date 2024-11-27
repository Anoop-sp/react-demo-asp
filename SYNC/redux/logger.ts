import { Middleware } from '@reduxjs/toolkit';

/**
 * Logs dispatched actions and state changes for debugging.
 */
const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};

export default loggerMiddleware;
