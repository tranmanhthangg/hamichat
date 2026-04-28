import { Form, Modal, Input } from "antd";
import { useContext } from "react";
import { AppContext } from "../../Context/AppProvider.jsx";
import { addDocument } from "../../firebase/service.js";
import { AuthContext } from "../../Context/AuthProvider.jsx";

const AddRoomModal = () => {
    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
    const { user } = useContext(AuthContext);
    const uid = user?.uid;
    const [form] = Form.useForm();

    const handleOk = async () => {
        const values = await form.validateFields();
        await addDocument('rooms', { ...values, members: [uid] });
        form.resetFields();
        setIsAddRoomVisible(false);
    }

    const handleCancel = () => {
        form.resetFields();
        setIsAddRoomVisible(false);
    }

    return (
        <Modal
            title="Tạo phòng"
            open={isAddRoomVisible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form form={form} layout="vertical">
                <Form.Item label="Tên phòng" name='name'>
                    <Input placeholder="Nhập tên phòng" />
                </Form.Item>
                <Form.Item label="Mô tả" name='description'>
                    <Input.TextArea placeholder="Nhập mô tả" />
                </Form.Item>
            </Form>
        </Modal >
    )
}

export default AddRoomModal;
