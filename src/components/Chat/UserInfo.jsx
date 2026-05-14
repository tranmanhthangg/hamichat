import { Avatar, Button } from "antd";
import styled from "styled-components";
import { auth } from "../../firebase/config.js";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider.jsx";

const WrapperStyled = styled.div`
    height: 10vh;
    padding: 0 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;

    .auth {
        display: flex;
        align-items: center;
    }

    .username {
        margin-left: 10px;
        padding: 0 !important;
        font-size: 16px;
        border: none;
        outline: none;
        box-shadow: none;
        background: transparent;
        color: inherit;
    }

    .username:hover,
    .username:focus,
    .username:active,
    .username:focus-visible {
        background: transparent !important;
        border: none !important;
        color: inherit !important;
        box-shadow: none !important;
    }

    .username:hover {
        color: #fadb14 !important;
    }

    .username::after {
        display: none !important;
    }

    .avatar {
        background-color: #ccc;
    }

    .logout {
        background-color: #832601;
        padding: 7px;
        border-radius: 5px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 6px;
    }

    .logout-btn {
        font-size: 20px;
        transition: transform 0.2s ease;
        display: inline-block;
    }

    .logout:hover .logout-btn {
        transform: scale(1.05);
        color: #fadb14 !important;
    }
`;

const UserInfo = () => {
    const {
        user: { displayName, photoURL },
    } = useContext(AuthContext);

    return (
        <WrapperStyled>
            <div className="auth">
                <Avatar className="avatar" size="large" src={photoURL}>
                    {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
                </Avatar>
                <Button type="text" className="username">
                    {displayName}
                </Button>
            </div>

            <div className="logout" onClick={() => auth.signOut()}>
                <i className="fa-solid fa-right-from-bracket logout-btn"></i>
            </div>
        </WrapperStyled>
    );
};

export default UserInfo;
