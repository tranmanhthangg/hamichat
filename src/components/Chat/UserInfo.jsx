import { Avatar, Button } from "antd";
import styled from "styled-components";
import { auth } from "../../firebase/config.js";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider.jsx";

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom = 1px solid rgba(82, 38, 83);

    .auth {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .username {
        color: white;
        margin-left: 5px;
    }

    .avatar {
        background-color: #ccc;
    }
`;

const UserInfo = () => {
    const { user: {
        displayName,
        photoURL
    } } = useContext(AuthContext);

    return (
        <WrapperStyled>
            <div className="auth">
                <Avatar className="avatar" src={photoURL}>{photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}</Avatar>
                <p className="username">{displayName}</p>
            </div>

            <Button ghost onClick={() => { auth.signOut() }}>Đăng xuất</Button>
        </WrapperStyled>
    );
}

export default UserInfo;
