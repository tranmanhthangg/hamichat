import { Typography, Avatar } from "antd";
import styled from "styled-components"; 

const WrapperStyled = styled.div`
    margin-bottom: 10px;

    .auth {
        margin-left: 5px;
        font-weight: bold;
    }

    .content {
        margin-left: 30px;
    }

    .date {
        margin-left: 5px;
    }
`;

const Message = ({text, displayName, createdAt, photoURL}) => {
    return (
    <WrapperStyled>
        <div>
            <Avatar size='small' src={photoURL}>A</Avatar>
            <Typography.Text className="auth">{displayName}</Typography.Text>
            <Typography.Text className="date">{createdAt}</Typography.Text>
        </div>
        <div>
            <Typography.Text className="content">{text}</Typography.Text>
        </div>
    </WrapperStyled>
    );
}

export default Message;
