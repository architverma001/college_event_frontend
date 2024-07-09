import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const checkTokenValidity = () => {
      const tokenData = JSON.parse(localStorage.getItem('accessToken'));
      if (tokenData && new Date(tokenData.expiresAt) > new Date()) {
        setAccessToken(tokenData.token);
        return true;
      } else {
        localStorage.removeItem('accessToken');
        setAccessToken(null);
        return false;
      }
    };

    // Check if user is already authenticated on component mount
    if (checkTokenValidity()) {
      navigate('/');
    }
  }, [navigate]);

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    saveToken(token);
    navigate('/');
  };

  const handleGoogleLoginError = () => {
    console.log('Google Login Failed');
    // Handle login failure
  };

  const saveToken = (token) => {
    const now = new Date();
    const tokenData = {
      token,
      expiresAt: now.setDate(now.getDate() + 10), // 10 days validity
    };
    localStorage.setItem('accessToken', JSON.stringify(tokenData));
    setAccessToken(token);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={handleGoogleLoginError} useOneTap />
        {/* Add your traditional username/password signin form here if needed */}
        <form>
          {/* Your username/password fields and submit button */}
        </form>
      </div>
    </div>
  );
};

export default Signin;
