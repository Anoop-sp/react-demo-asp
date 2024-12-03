import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';

export const createMockRouter = (overrides: Partial<NextRouter> = {}): NextRouter => ({
  basePath: '',
  pathname: '/',
  route: '/',
  query: {},
  asPath: '/',
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  isFallback: false,
  isReady: true,
  isLocaleDomain: false,
  isPreview: false,
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  ...overrides,
});
