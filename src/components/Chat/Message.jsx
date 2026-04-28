import { Typography, Avatar } from "antd";
import { formatRelative } from "date-fns";
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

const Message = ({ text, displayName, createdAt, photoURL }) => {
    const formatDate = (seconds) => {
        let formatedDate = "";

        if (seconds) {
            formatedDate = formatRelative(new Date(seconds * 1000), new Date());

            formatedDate = formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1);
        }

        return formatedDate;
    }

    return (
        <WrapperStyled>
            <div>
                <Avatar size='small' src={photoURL}>{photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}</Avatar>
                <Typography.Text className="auth">{displayName}</Typography.Text>
                <Typography.Text className="date">{formatDate(createdAt?.seconds)}</Typography.Text>
            </div>
            <div>
                <Typography.Text className="content">{text}</Typography.Text>
            </div>
        </WrapperStyled>
    );
}

export default Message;
