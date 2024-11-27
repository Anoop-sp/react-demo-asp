'use client'; // Needed for client-side rendering

import { Provider } from 'react-redux';
import { store } from './index';

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
