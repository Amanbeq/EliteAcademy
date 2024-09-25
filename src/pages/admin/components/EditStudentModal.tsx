import React, { useState } from 'react';
import { Modal, Form, Button, Input } from 'rsuite';
import { useDispatch } from 'react-redux';
import { updateStudent } from '@redux/cake/studentsSlice';
import { AppDispatch } from '@redux/store';

interface EditStudentModalProps {
  student: any;
  isOpen: boolean;
  onClose: () => void;
}

export const EditStudentModal: React.FC<EditStudentModalProps> = ({ student, isOpen, onClose }) => {
  const [formData, setFormData] = useState(student);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (value: any, name: string) => {
    setFormData((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(updateStudent(formData));
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>Редактировать Студента</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form fluid>
          <Form.Group>
            <Form.ControlLabel>Имя</Form.ControlLabel>
            <Input value={formData.name} onChange={(value) => handleChange(value, 'name')} />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Input value={formData.email} onChange={(value) => handleChange(value, 'email')} />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Гражданство</Form.ControlLabel>
            <Input value={formData.citizenship} onChange={(value) => handleChange(value, 'citizenship')} />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Университет</Form.ControlLabel>
            <Input value={formData.university} onChange={(value) => handleChange(value, 'university')} />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Специальность</Form.ControlLabel>
            <Input value={formData.major} onChange={(value) => handleChange(value, 'major')} />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Уровень образования</Form.ControlLabel>
            <Input value={formData.education_level} onChange={(value) => handleChange(value, 'education_level')} />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Статус заявки</Form.ControlLabel>
            <Input value={formData.application_status} onChange={(value) => handleChange(value, 'application_status')} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit} appearance="primary">Сохранить</Button>
        <Button onClick={onClose} appearance="subtle">Отмена</Button>
      </Modal.Footer>
    </Modal>
  );
};
