import ReduxProvider from '../store/ReduxProvider';
import './globals.css';

export const metadata = {
  title: 'Banking Application',
  description: 'A Next.js banking app with Redux Toolkit and TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
