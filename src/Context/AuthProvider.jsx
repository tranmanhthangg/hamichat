import { useNavigate } from 'react-router-dom';
import {auth} from "../firebase/config";
import {onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscibed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                navigate("/");
            }
            else navigate('/login');
            
            setIsLoading(false);
        });

        return () => {
            unsubscibed();
        }
    }, [navigate]);

    return (
        <>
            <AuthContext.Provider value={{user}}>
                { isLoading ? <Spin /> : children}
            </AuthContext.Provider>
        </>
    );
}

export default AuthProvider;