import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Tooltip, Button, Input, Form } from "antd";
import styled from "styled-components";
import Message from "./Message";

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 56px;
    padding: 0 16px;
    align-items: center;
    border-bottom: 1px solid rgb(230, 230, 230);

    .header-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .header-title {
        margin: 0;
        font-weight: bold;
    }

    .header-desc {
        font-size: 12px;
    }
`;

const ButtonGroupStyled = styled.div`
    display: flex;
    align-items: center;
`;

const ContentStyled = styled.div`

`;

const MessageListStyled = styled.div``;

const ChatWindow = () => {
    return (
        <>
            <HeaderStyled>
                <div className="header-info">
                    <p className="header-title">Room 1</p>
                    <span className="header-desc">Day la room 1</span>
                </div>
                <ButtonGroupStyled>
                    <Button type="text" icon={<UserAddOutlined />}>Mời</Button>
                    <Avatar.Group size='small' max={{ count: 2 }}>
                        <Tooltip title='A'>
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title='B'>
                            <Avatar>B</Avatar>
                        </Tooltip>
                        <Tooltip title='C'>
                            <Avatar>C</Avatar>
                        </Tooltip>
                        <Tooltip title='D'>
                            <Avatar>D</Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </ButtonGroupStyled>
            </HeaderStyled>
            <ContentStyled>
                <MessageListStyled>
                    <Message text="Test" photoURL={null} displayName="Tung" createdAt={1234332324} />
                    <Message text="Test" photoURL={null} displayName="Tung" createdAt={1234332324} />
                    <Message text="Test" photoURL={null} displayName="Tung" createdAt={1234332324} />
                    <Message text="Test" photoURL={null} displayName="Tung" createdAt={1234332324} />
                </MessageListStyled>
                <Form>
                    <Form.Item>
                        <Input />
                    </Form.Item>
                    <Button>Gửi</Button>
                </Form>
            </ContentStyled>
        </>       
    )
}

export default ChatWindow