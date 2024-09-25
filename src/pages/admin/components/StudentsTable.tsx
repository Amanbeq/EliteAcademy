import React, { useState } from 'react';
import { Table, Button, Whisper, Tooltip, Modal, Avatar } from 'rsuite';
import { MdEdit, MdDeleteOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/store';
import { deleteStudent } from '@redux/cake/studentsSlice';
import { EditStudentModal } from './EditStudentModal';

const { Column, HeaderCell, Cell } = Table;

interface StudentsTableProps {
  onEdit: (student: any) => void;
}

export const StudentsTable: React.FC<StudentsTableProps> = ({ onEdit }) => {
  const students = useSelector((state: RootState) => state.students.data);
  const dispatch = useDispatch<AppDispatch>();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const handleDelete = (id: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Останавливаем всплытие события при клике на кнопку удаления
    setSelectedStudent(students.find((student: any) => student.id === id));
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedStudent) {
      dispatch(deleteStudent(selectedStudent.id));
    }
    setIsDeleteModalOpen(false);
  };

  const handleRowClick = (student: any) => {
    setSelectedStudent(student);
    setIsInfoModalOpen(true);
  };

  const handleEdit = (student: any, event: React.MouseEvent) => {
    event.stopPropagation(); // Останавливаем всплытие события при клике на кнопку редактирования
    setSelectedStudent(student);
    setIsEditModalOpen(true);
  };

  return (
    <>
      <Table
        height={(students.length * 50) + 50}
        style={{ width: '100%', maxHeight: '600px' }}
        locale={{ emptyMessage: 'Данные не найдены' }}
        className='students-table'
        data={students}
        onRowClick={handleRowClick} // Добавляем обработчик клика по строке
      >
        <Column width={40} fixed>
          <HeaderCell>№</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column flexGrow={1} fixed>
          <HeaderCell>Имя</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column flexGrow={1} fixed>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
        <Column width={100}>
          <HeaderCell>Роль</HeaderCell>
          <Cell dataKey="role" />
        </Column>
        <Column width={150} fixed="right">
          <HeaderCell>Действия</HeaderCell>
          <Cell>
            {(rowData: any) => (
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {/* Кнопка редактирования */}
                <Whisper
                  trigger="hover"
                  placement="top"
                  speaker={<Tooltip>Редактировать</Tooltip>}
                >
                  <Button onClick={(event) => handleEdit(rowData, event)}>
                    <MdEdit color='#1caf68' size={20} />
                  </Button>
                </Whisper>

                {/* Кнопка удаления */}
                <Whisper
                  trigger="hover"
                  placement="top"
                  speaker={<Tooltip>Удалить</Tooltip>}
                >
                  <Button onClick={(event) => handleDelete(rowData.id, event)}>
                    <MdDeleteOutline color='rgb(210 54 54)' size={20} />
                  </Button>
                </Whisper>
              </div>
            )}
          </Cell>
        </Column>
      </Table>

      {/* Модалка редактирования студента */}
      {isEditModalOpen && selectedStudent && (
        <EditStudentModal
          student={selectedStudent}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      {/* Модалка удаления студента */}
      <Modal open={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
        <Modal.Header>
          <Modal.Title>Удалить студента?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Вы уверены, что хотите удалить студента {selectedStudent?.name}?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={confirmDelete} appearance="primary" color="red">
            Удалить
          </Button>
          <Button onClick={() => setIsDeleteModalOpen(false)} appearance="subtle">
            Отмена
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Модалка с информацией о студенте */}
      {isInfoModalOpen && selectedStudent && (
        <Modal open={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)}>
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
            <Button onClick={() => setIsInfoModalOpen(false)} appearance="subtle">
              Закрыть
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};
