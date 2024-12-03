import React from 'react';
import { createMockRouter } from '../../test-utils/mockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import Counter from '../Counter'; // Adjust path
import { renderWithProviders } from '../../test-utils/renderWithProviders';

test('renders with mock router', () => {
  const mockRouter = createMockRouter({ pathname: '/test' });

  const { getByText } = renderWithProviders(
    <RouterContext.Provider value={mockRouter}>
      <Counter />
    </RouterContext.Provider>
  );

  expect(mockRouter.pathname).toBe('/test');
  expect(getByText(/Count:/)).toBeInTheDocument();
});
