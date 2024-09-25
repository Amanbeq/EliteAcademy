// redux/studentsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

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

interface StudentsState {
  data: Student[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: StudentsState = {
  data: [],
  status: 'idle',
  error: null,
};

// Получение студентов
export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  const response = await axios.get('https://7c967791f6073f31.mokky.dev/students');
  return response.data;
});

// Удаление студента
export const deleteStudent = createAsyncThunk('students/deleteStudent', async (id: number) => {
  const response = await axios.delete(`https://7c967791f6073f31.mokky.dev/students/${id}`);
  if (response.status === 200) toast.success("Студент успешно удален")
  return id;
});

// Редактирование студента
export const updateStudent = createAsyncThunk('students/updateStudent', async (updatedStudent: Student) => {
  const response = await axios.patch(`https://7c967791f6073f31.mokky.dev/students/${updatedStudent.id}`, updatedStudent);
  if (response.status === 200) toast.success("Студент успешно обновлен")
  return response.data;
});

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch students';
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.data = state.data.filter((student) => student.id !== action.payload);
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.data.findIndex((student) => student.id === action.payload.id);
        state.data[index] = action.payload;
      });
  },
});

export default studentsSlice.reducer;
