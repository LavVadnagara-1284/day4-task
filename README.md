# **NestJS User Management API**

## **📌 Project Overview**
This is a **NestJS-based CRUD API** for **User Management**, allowing users to **Create, Read, Update, and Delete (CRUD)** user data. The project follows a modular structure, keeping controllers, services, and DTOs separate for better maintainability.

---

## **⚙️ Installation & Setup**

### **1️⃣ Clone the Repository**
```sh
git clone <repository-url>
cd day4-task
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run the Application**
```sh
npm run start
```
- The server starts at: **http://localhost:3000**

### **4️⃣ Test with Postman**
- Import the Postman Collection file: `Day4-Task4-User-Management.postman_collection.json`
- Use Postman to test the CRUD APIs.

---

## **🚀 API Endpoints & Usage**

### **1️⃣ Create User**
- **Endpoint:** `POST /users`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "bio": "Software Developer"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User created successfully",
    "data": {
      "id": "1710679001234",
      "name": "John Doe",
      "email": "john@example.com",
      "bio": "Software Developer"
    }
  }
  ```

### **2️⃣ Get All Users**
- **Endpoint:** `GET /users`
- **Response:**
  ```json
  {
    "message": "All users retrieved successfully",
    "data": [
      {
        "id": "1710679001234",
        "name": "John Doe",
        "email": "john@example.com",
        "bio": "Software Developer"
      }
    ]
  }
  ```

### **3️⃣ Update User**
- **Endpoint:** `PUT /users/:id`
- **Request Body:**
  ```json
  {
    "name": "John Smith"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User updated successfully",
    "data": {
      "id": "1710679001234",
      "name": "John Smith",
      "email": "john@example.com",
      "bio": "Software Developer"
    }
  }
  ```

### **4️⃣ Delete User**
- **Endpoint:** `DELETE /users/:id`
- **Response:**
  ```json
  {
    "message": "User deleted successfully",
    "data": {
      "id": "1710679001234",
      "name": "John Smith",
      "email": "john@example.com",
      "bio": "Software Developer"
    }
  }
  ```
