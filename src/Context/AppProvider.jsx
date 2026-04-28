/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react';
import { AuthContext } from './AuthProvider';
import useFireStore from '../hooks/useFireStore';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);

    const { user: { uid } } = useContext(AuthContext);

    const roomCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid
        }
    }, [uid])

    const rooms = useFireStore("rooms", roomCondition);

    return (
        <AppContext.Provider value={{ rooms, isAddRoomVisible, setIsAddRoomVisible }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
