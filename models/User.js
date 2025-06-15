import mongoose from "mongoose";


// Создаем схему для пользователя
// Схема - это описание структуры данных, которые будут храниться в базе данных
const UserShema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // Обязательное поле
        unique: true, // Уникальное значение
        trim: true, // Удаляет пробелы в начале и конце строки
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true, // Приводит к нижнему регистру
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true}) // Добавляет поля createdAt и updatedAt

export default mongoose.model('User', UserShema); // Экспортируем модель пользователя
// mongoose.model - это метод, который создает модель на основе схемы
// 'User' - это имя модели, которое будет использоваться для создания коллекции в базе данных
// UserShema - это схема, на основе которой будет создана модель