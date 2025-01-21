import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRegister = () => {
        if (formData.firstName && formData.lastName && formData.email && formData.password) {
            localStorage.setItem('user', JSON.stringify(formData));
            alert('Регистрация успешна!');
        } else {
            alert('Пожалуйста, заполните все поля!');
        }
    };

    return (
        <Form>
            <Row>
                <Col>
                    <Form.Control
                        placeholder="Имя"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </Col>
                <Col>
                    <Form.Control
                        placeholder="Фамилия"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </Col>
            </Row>
            <Row style={{ marginTop: '15px' }}>
                <Col>
                    <Form.Control
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Col>
                <Col>
                    <Form.Control
                        placeholder="Пароль"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </Col>
            </Row>
            <Button
                variant="primary"
                style={{ marginTop: '15px' }}
                onClick={handleRegister}
            >
                Зарегистрироваться
            </Button>
        </Form>
    );
}

export default Register;
