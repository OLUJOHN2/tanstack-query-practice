import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {QueryClient, QueryClient, QueryClientProvider} from "@tanstack/react-query"

const QueryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}
    <App />
  </QueryClientProvider>
  </StrictMode>
);
