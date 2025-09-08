import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router';
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
);
