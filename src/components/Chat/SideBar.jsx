import { Row, Col } from 'antd';
import UserInfo from './UserInfo';
import RoomList from './RoomList';
import styled from 'styled-components';

const SideBarStyled = styled.div`
    background: linear-gradient(90deg, #920303 0%, #E60404 100%);
    color: white;
    height: 100vh;
`;

const SideBar = () => {
    return (
        <SideBarStyled>
            <Row>
                <Col span={24}><UserInfo /></Col>
                <Col span={24}><RoomList /></Col>
            </Row>
        </SideBarStyled>
    );
}

export default SideBar;
