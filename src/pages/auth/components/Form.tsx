import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, ButtonToolbar, Button, InputGroup, Input } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { MdEmail, MdLock } from 'react-icons/md';
import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';
import { login } from '@redux/cake/authSlice';
import { AppDispatch } from '@redux/store';
import toast from 'react-hot-toast';

interface Props {
  className?: string;
  isLogin: boolean;
}

export const FormField: React.FC<Props> = ({ className, isLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }

    try {
      await dispatch(login(email, password));
      navigate('/admin');
    } catch (err) {
      toast.error('Ошибка авторизации. Проверьте данные.', err);
      console.error('Ошибка авторизации. Проверьте данные.', err);
    }
  };

  return (
    <div className={clsx('form-container', className)}>
      <h3 className="form-title">Войти</h3>
      {error && <div className="error-message">{error}</div>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <InputGroup inside>
            <InputGroup.Addon style={{ padding: '0 10px 0 0' }}>
              <Icon style={{ width: "30px", height: "30px" }} as={MdEmail} />
            </InputGroup.Addon>
            <Input
              placeholder="Email"
              value={email}
              onChange={(value) => setEmail(value)}
              type="email"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="password">
          <InputGroup inside>
            <InputGroup.Addon style={{ padding: '0 10px 0 0' }}>
              <Icon style={{ width: "30px", height: "30px" }} as={MdLock} />
            </InputGroup.Addon>
            <Input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(value) => setPassword(value)}
            />
          </InputGroup>
        </Form.Group>

        <div className="forgot-password">
          {isLogin && <a href="#">Забыли пароль?</a>}
        </div>
        <ButtonToolbar className="form-buttons">
          <Button appearance="primary" onClick={handleSubmit}>
            {isLogin ? 'Войти' : 'Регистрация'}
          </Button>
          {isLogin && <Button appearance="default">Регистрация</Button>}
        </ButtonToolbar>
      </Form>
    </div>
  );
};
