# Expense Tracker App

This project is a full-stack Expense Tracker application with a React frontend and a Node.js/Express backend. It allows users to sign up, log in, and manage their expenses efficiently.

---

## Project Structure

```
.
├── backend/
│   ├── controller/
│   ├── db/
│   ├── router/
│   ├── utils/
│   ├── index.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    ├── assets/
    ├── package.json
    └── README.md
```

---

## Backend

- **Tech Stack:** Node.js, Express, MongoDB (assumed)
- **Location:** `backend/`
- **Main Entry:** `backend/index.js`
- **Features:**
  - User authentication (signup, login)
  - Expense management (CRUD)
  - Modular controllers, routers, and models

### Setup & Run
1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables in `.env` (e.g., MongoDB URI, JWT secret).
4. Start the server:
   ```sh
   npm start
   ```

---

## Frontend

- **Tech Stack:** React, Tailwind CSS
- **Location:** `frontend/`
- **Main Entry:** `frontend/src/index.js`
- **Features:**
  - User registration and login
  - Dashboard for managing expenses
  - Responsive UI with Tailwind CSS

### Setup & Run
1. Navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

---

## Usage
1. Start the backend server.
2. Start the frontend development server.
3. Open your browser at `http://localhost:3000` (or the port shown in the terminal).
4. Register a new user, log in, and start tracking your expenses!

---

## Folder Details

### Backend
- `controller/` — Business logic for users and expenses
- `db/` — Database connection and models
- `router/` — Express route definitions
- `utils/` — Utility functions (e.g., email, data parsing)

### Frontend
- `src/pages/` — Main pages (Login, Signup, Home)
- `src/components/` — Reusable UI components
- `src/utils/` — Helper functions (e.g., axios client)
- `assets/` — Images and other static assets

---

## Owner
This project is maintained by **Anand Pandey**.

## License
This project is for educational purposes. See individual files for license information if provided.

