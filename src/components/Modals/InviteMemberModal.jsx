import { useContext, useMemo, useState } from "react";
import { AppContext } from "../../Context/AppProvider";
import { Modal, Form, Select, Spin, Avatar } from "antd";
import { debounce } from "lodash";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const DebounceSelect = ({ fetchOptions, debounceTimeout = 300, ...props }) => {
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);

    const debounceFetcher = useMemo(() => {
        const loadOptions = (value) => {
            setOptions([]);
            setFetching(true);

            fetchOptions(value).then(newOptions => {
                setOptions(newOptions);
                setFetching(false);
            });
        }

        return debounce(loadOptions, debounceTimeout);
    }, [fetchOptions, debounceTimeout]);

    return (
        <Select
            labelInValue
            filterOption={false}
            optionLabelProp="label"
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
        >
            {
                options.map(option => {
                    return <Select.Option key={option.value} value={option.value} label={option.label}>
                        <Avatar size="small" src={option.photoURL}>
                            {option.photoURL ? "" : option.label?.charAt(0)?.toUpperCase()}
                        </Avatar>
                        {`${option.label}`}
                    </Select.Option>
                })
            }
        </Select>
    );
}

const fetchUserList = async (search) => {
    const q = query(
        collection(db, "users"),
        where('keyWords', 'array-contains', search),
        orderBy("displayName"),
        limit(20)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
        label: doc.data().displayName,
        value: doc.data().uid,
        photoURL: doc.data().photoURL
    }));
}

const InviteMemberModal = () => {
    const { isInviteMemberVisible, setIsInviteMemberVisible } = useContext(AppContext);
    const [value, setValue] = useState([]);
    const [form] = Form.useForm();

    const handleOk = async () => {

        form.resetFields();
        setIsInviteMemberVisible(false);
    }

    const handleCancel = () => {
        form.resetFields();
        setIsInviteMemberVisible(false);
    }

    return (
        <Modal
            title="Mời thêm thành viên"
            open={isInviteMemberVisible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form form={form} layout="vertical">
                <DebounceSelect
                    mode='multiple'
                    label="Tên các thành viên"
                    value={value}
                    placeholder="Nhập tên thành viên"
                    fetchOptions={fetchUserList}
                    onChange={newValue => setValue(newValue)}
                    style={{ width: "100%" }}
                />
            </Form>
        </Modal >
    )
}

export default InviteMemberModal;
