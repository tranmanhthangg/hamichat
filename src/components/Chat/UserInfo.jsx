import { Avatar, Button } from "antd";
import styled from "styled-components";
import { auth, db } from "../../firebase/config";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";

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
    useEffect(() => {
        onSnapshot(collection(db, "users"), (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            console.log({data, snapshot, docs: snapshot.docs});
        });
    }, []);

    return (
        <WrapperStyled>
            <div className="auth">
                <Avatar className="avatar">A</Avatar> 
                <p className="username">ABC</p>
            </div>
            
            <Button ghost onClick={() => {auth.signOut()}}>Đăng xuất</Button>     
        </WrapperStyled>
    );
}

export default UserInfo;
