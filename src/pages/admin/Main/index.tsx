import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Avatar, Button } from 'rsuite';
import { AppDispatch, RootState } from '@redux/store';
import { fetchStudents } from '@redux/cake/studentsSlice';
import { StudentsTable } from '../components/StudentsTable';

interface Student {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
  citizenship: string;
  university: string;
  major: string;
  education_level: string;
  application_status: string;
  application_date: string;
}

export const AdminPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.auth.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleOpenModal = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  return (
    <div className='admin'>
      <div className='container'>
        {/* Шапка */}
        <div className="admin-header" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Avatar circle src={user?.avatar} size="lg" style={{ marginRight: '20px' }} />
          <h2>{user?.name}</h2>
        </div>

        {/* Таблица студентов */}
        <StudentsTable onEdit={handleOpenModal} />

        {/* Модалка с информацией о студенте */}
        {isModalOpen && selectedStudent && (
          <Modal open={isModalOpen} onClose={handleCloseModal}>
            <Modal.Header>
              <Modal.Title>Информация о студенте</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{ textAlign: 'center' }}>
                <Avatar circle src={selectedStudent.avatar} size="lg" />
                <h3>{selectedStudent.name}</h3>
                <p><b>Email:</b> {selectedStudent.email}</p>
                <p><b>Гражданство:</b> {selectedStudent.citizenship}</p>
                <p><b>Университет:</b> {selectedStudent.university}</p>
                <p><b>Специальность:</b> {selectedStudent.major}</p>
                <p><b>Уровень образования:</b> {selectedStudent.education_level}</p>
                <p><b>Статус заявки:</b> {selectedStudent.application_status}</p>
                <p><b>Дата подачи заявки:</b> {selectedStudent.application_date}</p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleCloseModal} appearance="subtle">
                Закрыть
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};
