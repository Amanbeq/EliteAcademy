import { Toaster } from 'react-hot-toast';
import { CustomProvider } from 'rsuite';
import ruRU from 'rsuite/locales/ru_RU';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';
import { AppRouter } from './routes';
import './app.scss'
function formatDate(data: number | Date) {
  return format(data, 'dd.MM.yyyy', { locale: ru });
}

function App() {
  return (
    <CustomProvider locale={ruRU} formatDate={formatDate}>
      <AppRouter />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
        }}
      />
    </CustomProvider>
  );
}

export default App;
