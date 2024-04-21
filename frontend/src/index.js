import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {GoogleOAuthProvider} from '@react-oauth/google'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="16967297100-1debdfc5423fcmkkv6qk0g47mqquj9hq.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);


