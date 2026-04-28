import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Tooltip, Button, Input, Form, Alert } from "antd";
import styled from "styled-components";
import Message from "./Message";
import { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";

const WrapperStyled = styled.div`
    height: 100vh;
`;

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
    height: calc(100% - 77px);
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: flex-end;
`;

const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 2px 2px 0;
    border: 1px solid rgb(230,230,230);
    border-radius: 2px;

    .ant-form-item {
        flex: 1;
        margin-bottom: 0;
    }
`;

const MessageListStyled = styled.div`
    max-height: 100%;
    over-flow-y: auto;
`;

const ChatWindow = () => {
    const { selectedRoom, members, setIsInviteMemberVisible } = useContext(AppContext);

    return (
        <WrapperStyled>
            {selectedRoom ?
                <>
                    <HeaderStyled>
                        <div className="header-info">
                            <p className="header-title">{selectedRoom?.name || 'Chọn một phòng'}</p>
                            <span className="header-desc">{selectedRoom?.description || ''}</span>
                        </div>
                        <ButtonGroupStyled>
                            <Button type="text" icon={<UserAddOutlined />} onClick={() => setIsInviteMemberVisible(true)}>Mời</Button>
                            <Avatar.Group size='small' max={{ count: 2 }}>
                                {
                                    members.map(member => <Tooltip title={member.displayName} key={member.id}>
                                        <Avatar src={member.photoURL}>{member.photoURL ? "" : member.displayName?.charAt(0)?.toUpperCase()}</Avatar>
                                    </Tooltip>)
                                }
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
                        <FormStyled>
                            <Form.Item>
                                <Input variant="borderless" autoComplete='off' placeholder="Nhập tin nhắn..." />
                            </Form.Item>
                            <Button>Gửi</Button>
                        </FormStyled>
                    </ContentStyled>
                </>
                : <Alert title="Hãy chọn phòng" type="info" showIcon style={{ margin: "5" }} closable />
            }
        </WrapperStyled>
    )
}

export default ChatWindow