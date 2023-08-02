import React from 'react';
import { AuthProvider } from './AuthContext';


const App = () => {
  // You can use the AuthProvider to wrap your application or a specific section that requires authentication.
  // The AuthProvider makes the authentication state available to its child components through the useAuth hook.
  return (
    <AuthProvider>
      <div>
        {/* Your application components */}
        <h1>Welcome to Your App!</h1>
        <p>Some content that requires authentication.</p>

      </div>
    </AuthProvider>
  );
};

export default App;
