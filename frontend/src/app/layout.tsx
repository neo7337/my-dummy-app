import React from 'react';
import './globals.css';

export const metadata = {
  title: 'My Next.js App',
  description: 'Created with Next.js',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <header>
            <h1>My Next.js App</h1>
          </header>
          <main>{children}</main>
          <footer>
            <p>© 2025 My Next.js App</p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;