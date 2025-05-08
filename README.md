# 🧩 Task Management REST API

This is a simple RESTful API built with **Node.js**, **Express**, and **MongoDB** for managing tasks and users. It includes user creation, login (with password hashing), and full CRUD operations for both users and tasks.

---

## 🚀 Features

- User registration and login with hashed passwords
- Task creation, update, deletion, and retrieval
- MongoDB integration using Mongoose
- Validation with `validator.js`
- Modular file structure (MVC-like)

---

## 📁 Project Structure

task/
├── controller/
│ ├── task.js
│ └── user.js
├── model/
│ ├── Task.js
│ └── User.js
├── routes/
│ ├── task.js
│ └── user.js
└── index.js



---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/GomesCabral/restApi.git
cd restApi

# Install dependencies
npm install


💾 MongoDB Setup
Make sure MongoDB is running locally (default port 27017). The app connects to the database task.

You can change the connection string in index.js if needed.

node index.js


http://localhost:4040


📌 API Endpoints
🔐 Users
Method	Endpoint	Description
POST	/user	Create a new user
POST	/user/login	Login a user
GET	/user	Get all users
GET	/user/:id	Get a user by ID
PATCH	/user/:id	Update a user
DELETE	/user/:id	Delete a user

✅ Tasks
Method	Endpoint	Description
POST	/task	Create a new task
GET	/task	Get all tasks
GET	/task/:id	Get a task by ID
PATCH	/task/:id	Update a task
DELETE	/task/:id	Delete a task

🛡️ Dependencies
express

mongoose

validator

bcryptjs


📜 License
This project is licensed under the MIT License.


---

Você quer que eu adicione esse conteúdo automaticamente no seu projeto local ou suba para o GitHub por você (com instruções)?
