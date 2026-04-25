import { Button, Collapse } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PlusSquareOutlined } from "@ant-design/icons";

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
    const items = [
        {
            key: '1',
            label: 'Danh sách các phòng',
            children:
                <ChildrenStyled>
                    <Link className="link-styled">Room1</Link>
                    <Link className="link-styled">Room2</Link>
                    <Link className="link-styled">Room3</Link>
                    <Button type='text' icon={<PlusSquareOutlined />} className="add-room">Thêm phòng</Button>
                </ChildrenStyled>
        }
    ];

    return (
        <>
            <StyledCollapse defaultActiveKey={['1']} items={items} ghost/>
        </>
    )
}

export default RoomList
