FROM node:14

# Установите рабочую директорию
WORKDIR /app

# Скопируйте package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте все файлы проекта
COPY . .

# Соберите проект
RUN npm run build

# Установите сервер для обслуживания статических файлов
RUN npm install -g serve

# Укажите команду для запуска сервера
CMD ["serve", "-s", "build"]

# Укажите порт, на котором приложение будет работать
EXPOSE 3000

