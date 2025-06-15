import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import  TestRouter from './routes/Test.js'; // Импортируем роуты из файла Test.js
import AuthRouter from './routes/Auth.js'; // Импортируем роуты из файла Auth.js

dotenv.config(); // Загружаем переменные окружения из .env файла (что бы работать с env файлом)
// express - это фреймворк для создания веб-приложений на Node.js

const PORT = process.env.PORT || 3001 // Порт, на котором будет запущен сервер, по умолчанию 3001

const app = express();

//Формат ресурса - json
app.use(express.json());

// TEST ROUTER// Чтобы использовать роуты, нужно подключить их к приложению
app.use('/test', TestRouter); // '/test' - базовый путь для всех роутов(в данном случае это корень)prefix
// Auth ROUTER
app.use('/auth', AuthRouter); // '/auth' - базовый путь для всех роутов(в данном случае это корень)prefix


// Подключаемся к базе данных MongoDB. Для подключения к базе данных MongoDB используется mongoose
// mongoose - это библиотека для работы с MongoDB в Node.js
async function connectedToMongoDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Successfully Connected to MongoDB');
    }
    catch (err) {
        console.log(`Connecting to MongoDB is failed: ${err}`);
    }
}
connectedToMongoDB()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})



//indiroka300300 - mongoDB cluster username // jtB1wy96xRt0bT5l// - mongoDB cluster password
//mongodb+srv://indiroka300300:jtB1wy96xRt0bT5l@cluster0.guf7myw.mongodb.net/testapp?retryWrites=true&w=majority&appName=Cluster0