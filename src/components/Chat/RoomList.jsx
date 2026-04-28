import { Button, Collapse } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PlusSquareOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AppContext } from "../../Context/AppProvider.jsx";

const StyledCollapse = styled(Collapse)`
    .ant-collapse-title, .ant-collapse-expand-icon {
        color: white;
    }
    
    .ant-collapse-panel {
        padding: 0 40px;
    }
`;

const ChildrenStyled = styled.div`
    .link-styled {
        display: block;
        margin-bottom: 5px;
        color: white;
    }
    
    .add-room {
        color: white;
        padding: 0;
    }
`;

const RoomList = () => {
    const { rooms, setIsAddRoomVisible } = useContext(AppContext);

    const handleAddRoom = () => {
        setIsAddRoomVisible(true);
    }

    const items = [
        {
            key: '1',
            label: 'Danh sách các phòng',
            children:
                <ChildrenStyled>
                    {
                        rooms.map(room => <Link className="link-styled" key={room.id}>{room.name}</Link>)
                    }
                    <Button type='text' icon={<PlusSquareOutlined />} className="add-room" onClick={handleAddRoom}>Thêm phòng</Button>
                </ChildrenStyled>
        }
    ];

    return (
        <>
            <StyledCollapse defaultActiveKey={['1']} items={items} ghost />
        </>
    )
}

export default RoomList
