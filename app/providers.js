'use client';

import { Toaster } from 'react-hot-toast';

const Providers = ({ children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default Providers;

// Toaster component is responsible for rendering the notificarions on the screen.
