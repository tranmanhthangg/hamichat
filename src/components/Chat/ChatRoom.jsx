import { Row, Col } from 'antd';
import SideBar from './SideBar';
import ChatWindow from './ChatWindow';

const ChatRoom = () => {
    return (
        <Row>
            <Col span={7}><SideBar /></Col>
            <Col span={17}><ChatWindow /></Col>
        </Row>
    );
}

export default ChatRoom;