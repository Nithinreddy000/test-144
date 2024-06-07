import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform any sign-out logic here (e.g., clearing authentication tokens)
    console.log("Signing out...");

    // Redirect to the login page
    navigate('/src/components/CompanyLogin/CompanyLogin.jsx');
  }, [navigate]);

  return null;
};

export default SignOut;
