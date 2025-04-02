# 🚀 Node.js + TypeScript + Prisma Backend

## 📌 Project Overview
This is a **Node.js backend** built using **TypeScript** and **Prisma** for database management. The backend includes **user authentication** (register & login) with JWT, **password hashing** with bcrypt, and **Zod validation** for data integrity.

---

## 🏗 Tech Stack
- **Node.js** + **TypeScript**
- **Express.js** (Routing & Middleware)
- **Prisma ORM** (PostgreSQL, MySQL, SQLite)
- **Zod** (Validation)
- **JWT** (Authentication)
- **bcrypt** (Password Hashing)
- **Helmet, CORS, Morgan** (Security & Logging)

---

## 📂 Folder Structure
```
backend/
│── src/
│   ├── controllers/      # Business logic
│   │   ├── user.ts
│   ├── routes/           # API endpoints
│   │   ├── user.ts
│   ├── middlewares/      # Error handling
│   │   ├── errorHandler.ts
│   ├── prisma/           # Prisma schema & migrations
│   ├── app.ts            # Express app setup
│── package.json
│── tsconfig.json
│── .env
```

---

## 🚀 Installation & Setup
### 1️⃣ Clone the repository
```sh
git clone https://github.com/karankumar12345/Auth-Assignment
cd backend
```
### 2️⃣ Install dependencies
```sh
npm install
```
### 3️⃣ Set up environment variables
Create a `.env` file in the root and add:
```
PORT=4000
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
JWT_SECRET="supersecret"
```
### 4️⃣ Initialize Prisma & Run Migrations
```sh
npx prisma migrate dev --name init
npx prisma generate
```
### 5️⃣ Start the server
```sh
npm run dev
```

---

## 🔥 API Endpoints
### 🟢 **User Authentication**
| Method | Endpoint             | Description |
|--------|---------------------|-------------|
| POST   | `/api/v1/user/auth` | Register a new user |

| GET    | `/api/v1/user/users` | Get list of users |

---

## 🎯 Features
✅ **TypeScript + Node.js Backend**  
✅ **Prisma ORM (PostgreSQL, MySQL, SQLite)**  
✅ **Controllers & Routes Structure**  
✅ **Zod Validation for User Input**  
✅ **JWT Authentication for Login**  
✅ **Password Hashing with bcrypt**  
✅ **Global Error Handling**  

---

## 👨‍💻 Author
**Karan Kumar**

🚀 Happy coding! Let me know if you need any updates. 😎

