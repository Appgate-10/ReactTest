import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Users from './pages/users';
import Layout from './components/Layout';
import Login from './pages/login';

// function App() {
//   return (
//     <Router>
//       <Routes>
//           <Route path="/login" element={<Login />} />
       
//         </Routes>
//       <Layout>
//         <Routes>
//           <Route path="/users" element={<Users />} />
       
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
    
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          isLoggedIn ? <Navigate to="/app" /> : <Login onLogin={handleLogin} />
        } />
        <Route path="/app/*" element={
          isLoggedIn ? (
            <Layout>
              <Routes>
                <Route path="/users" element={<Users />} />
                {/* Add more routes for your app here */}
              </Routes>
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        } />
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
