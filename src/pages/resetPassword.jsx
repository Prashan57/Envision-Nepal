import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUserContext } from '../contexts/usercontext';
import Info from '../components/info';

const initialData = {
  password: '',
};

const ResetPassword = () => {

  const { id, token } = useParams();
  const [searchParams]=useSearchParams();
  const { onResetPassword , onVerifyResetToken} = useUserContext();
  const navigate = useNavigate();
  const [submitData, setSubmitData] = useState(initialData);
  const [error, setError] = useState({
    errorText: '',
    field: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await onResetPassword({ id, token: searchParams.get("token"), password: submitData.password });

    if (response.error) {
      setError({
        errorText: response.error,
        field: response.field || '',
      });

      if (response.error === 'Not a valid token' || response.error === 'Not authorized') {
        navigate('/404');
      }
    }

    if (response.success) {
      setError({
        errorText: '',
        field: '',
      });
      navigate('/login');
    }
  };

  const handleChange = (value, key = 'password') => {
    setSubmitData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    const verifyResetToken = async () => {
      try {
        const response = await onVerifyResetToken({ id, token:searchParams.get("token") });

        if (response.success) {
          console.log("Response Success")
        } else {
          navigate('/404');
        }
      } catch (error) {
        console.error('Error:', error);
        navigate('/404');
      }
    };
    if(searchParams.get("token")){
      verifyResetToken();
    }
      
  }, [id, searchParams, navigate, onVerifyResetToken]);

  return (
    <motion.div
      className="flex h-screen w-screen absolute bg-gray-800 items-center justify-center overflow-hidden"
      initial={{ y: '-100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white rounded-lg pb-8 pt-8 overflow-hidden w-96 flex flex-col items-center"
        initial={{ x: '400%' }}
        animate={{ x: '0%' }}
        transition={{ duration: 0.25, ease: 'easeOut', delay: 0.35 }}
        exit={{ opacity: 1 }}
      >
        <h2 className="text-2xl mb-6">Reset Password</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-4 w-80">
            <input
              type="password"
              id="password"
              value={submitData.password}
              onChange={(e) => {
                handleChange(e.target.value, 'password');
              }}
              placeholder="Enter new Password"
              className="border-b rounded px-3 py-2 w-full mb-1"
            />
          </div>
          {!!error.errorText && !error.field && <Info type="error">{error.errorText}</Info>}
          <button type="submit" className="bg-secondary text-white rounded py-2 px-4">
            Reset Password
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ResetPassword;
