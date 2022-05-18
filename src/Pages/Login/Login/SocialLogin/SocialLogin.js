import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <div>
            <p className='text-danger'> Error: {error.message}</p>
        </div>
    }


    if (user || user) {
        navigate(from, { replace: true });
    }

    // if (user) {
    //     navigate('/additem')
    // }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-info w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-info w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info text-white fw-bold w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src="#" alt="" />
                    <span className='px-2'>Google Sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;