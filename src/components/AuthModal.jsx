import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Login from './Login';
import Register from './Register';

function AuthModal() {
    const [show, setShow] = useState(true);
    const [isLogin, setIsLogin] = useState(true); // Состояние для переключения между логином и регистрацией

    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{isLogin ? 'Login' : 'Register'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isLogin ? <Login /> : <Register />}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Перейти к регистрации' : 'Перейти к авторизации'}
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AuthModal;
