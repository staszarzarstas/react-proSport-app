import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Register() {
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control placeholder="Last name" />
                </Col>
            </Row>
            <Row
                style={{ marginTop: '15px' }}
            >
                <Col>
                    <Form.Control placeholder="Email" />
                </Col>
                <Col>
                    <Form.Control placeholder="password" type='password' />
                </Col>
            </Row>
        </Form>
    );
}

export default Register;