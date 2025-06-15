import express from 'express'
import bcrypt from 'bcrypt' // Импортируем bcrypt для хеширования паролей
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = express.Router()

router.post('/register', async (req, res) => {
    try {
        const {username, email, password} = req.body // Извлекаем username и password из тела запроса диструктуризацией

        if(!username) { // Проверяем, что все поля заполнены
            res.status(400).json({
                status: 400,
                message: `Username is required!`,
            })
        }
        if(!email) { // Проверяем, что все поля заполнены
            res.status(400).json({
                status: 400,
                message: `Email is required!`,
            })
        }
        if(!password) { // Проверяем, что все поля заполнены
            res.status(400).json({
                status: 400,
                message: `Password is required!`,
            })
        }

        const existingUser = await User.findOne({ email })
        if(existingUser) {
            res.status(400).json({
                status: 400,
                message: `User with email ${email} is already exists!`
            })
        }

        //Шифрование пароля
        const encryptedPassword = await bcrypt.hash(password, +process.env.SALT_ROUNDS) // Хешируем пароль с помощью bcrypt

        const newUser = await User.create({ username, email,password:encryptedPassword }) // Создаем нового пользователя с помощью модели User


        res.status(201).json({
            status: 201,
            message: `User ${newUser.username} is created successfully!`,
        })
    }
    catch (err){
        res.status(500).json({
            status: 500,
            message: `Server Error`,
        })
    }
})

router.post('/login', async(req, res) => {
    try {
        const {email, password} = req.body // Извлекаем email и password из тела запроса диструктуризацией
        const foundUser = await User.findOne({ email}) // Ищем пользователя по email в базе данных
        if(!foundUser) { // Если пользователь не найден, то возвращаем ошибку
            res.status(404).json({
                status: 404,
                message: `User with email ${email} is not found!`
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, foundUser.password) // Сравниваем введенный пароль с хешированным паролем в базе данных
        if(!isPasswordMatch) { // Если пароли не совпадают, то возвращаем ошибку
            res.status(400).json({
                status: 400,
                message: `Password doesn't match!`
            })
        } 

        const accessToken = await jwt.sign(
            {...foundUser}, // Создаем токен, используя данные пользователя
            process.env.JWT_SECRET, // Секретный ключ для подписи токена
            { expiresIn: '2h' } // Время жизни токена
        )

        res.status(200).json({
            status: 200,
            message: `Successful log!`,
            data: {
                id: foundUser._id,
                username: foundUser.username,   
                email: foundUser.email,
                accessToken
            }
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: `Server Error`,
        })
    }
})

router.get('/profile', (req, res) => { // автологин 
    try {
        const authorization = req.headers.authorization // Извлекаем заголовок авторизации из запроса
        if(!authorization || authorization.startsWith('Bearer ')) { // Проверяем, что заголовок авторизации существует и начинается с 'Bearer '
            return res.status(401).json({
                status: 401,
                message: `Token is not provided!`
            })
        }

        const token = authorization.split(' ')[1] // ['Bearer', 'token']
        const decodedUser = jwt.decode(token, process.env.JWT_SECRET)
        delete decodedUser.password // Удаляем пароль из объекта пользователя, чтобы не возвращать его в ответе

        res.status(200).json({
            status:200,
            message: 'User successfully found!',
            data: decodedUser
        })
    }
    catch(err) {
        console.error(err)
        res.status(500).json({
            status: 500,
            message: `Server Error`,
        })
    }
    
})

export default router