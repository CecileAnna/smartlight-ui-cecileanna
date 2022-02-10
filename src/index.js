import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://997360f062804388b01d0cf50e7efaca@o1139580.ingest.sentry.io/6197558",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(

  <React.StrictMode>

    <App />
{/* 
    <button onClick={methodDoesNotExist}>Break the world</button> */}

  </React.StrictMode>,

  document.getElementById('root')
);
