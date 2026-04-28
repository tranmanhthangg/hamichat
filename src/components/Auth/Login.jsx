import { Row, Col, Button, Typography } from 'antd';
import { signInWithPopup, FacebookAuthProvider, getAdditionalUserInfo } from "firebase/auth";
import { auth } from "../../firebase/config";
import { addDocument, generateKeywords } from '../../firebase/service';

const { Title } = Typography;
const fbProvider = new FacebookAuthProvider();

const Login = () => {
    const handleFbLogin = async () => {
        const data = await signInWithPopup(auth, fbProvider);
        const additionalUserInfo = getAdditionalUserInfo(data);

        if (additionalUserInfo?.isNewUser) {
            await addDocument('users', {
                displayName: data.user.displayName,
                email: data.user.email,
                photoURL: data.user.photoURL,
                uid: data.user.uid,
                providerId: data.providerId,
                keyWords: generateKeywords(data.user.displayName)
            });
        }
    }

    return (
        <Row justify={'center'} style={{ height: "800px" }}>
            <Col span={8}>
                <Title style={{ textAlign: "center", color: "#ccc" }} level={1}>HAMICHAT</Title>
                <Button style={{ width: "100%", marginBottom: "5px" }}>
                    Đăng nhập bằng Google
                </Button>
                <Button style={{ width: "100%" }} onClick={handleFbLogin}>
                    Đăng nhập bằng Facebook
                </Button>
            </Col>
        </Row>
    );
}

export default Login;
