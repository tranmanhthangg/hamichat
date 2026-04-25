import {Row, Col, Button, Typography} from 'antd';
import {auth} from "../../firebase/config";
import {signInWithPopup, FacebookAuthProvider} from "firebase/auth";

const {Title} = Typography;
const fbProvider = new FacebookAuthProvider();

const Login = () => {
    const handleFbLogin = () => {
        signInWithPopup(auth, fbProvider);
    }

    return (
        <Row justify={'center'} style={{height: "800px"}}>
            <Col span={8}>
                <Title style={{textAlign : "center", color: "#ccc"}} level={1}>HAMICHAT</Title>
                <Button style={{width: "100%", marginBottom: "5px"}}>
                    Đăng nhập bằng Google
                </Button>
                <Button style={{width: "100%"}} onClick={handleFbLogin}>
                    Đăng nhập bằng Facebook
                </Button>
            </Col>
        </Row>
    );
}

export default Login;
