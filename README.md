# 🛍️ OLX Clone

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-13AA52?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />
</p>

<p align="center">
  A modern OLX-inspired marketplace application built using React, Node.js, Express, and MongoDB.
</p>

---

# 🚀 Overview

OLX Clone is a full-stack marketplace web application inspired by OLX, allowing users to browse products, authenticate securely, and explore categorized listings through a clean and responsive user interface.

The project focuses on scalable frontend architecture, RESTful API integration, responsive design, and modern full-stack development practices.

---

# ✨ Features

## 🔐 Authentication System
- User registration and login
- Email and phone-based authentication
- Google OAuth integration
- Form validation with React Hook Form

## 📦 Product Management
- Browse products from FakeStore API
- Category-based filtering
- Real-time product search
- Product detail pages

## 🎨 Modern UI/UX
- Fully responsive design
- Mobile-first layout
- Interactive navigation components
- Toast notifications for user feedback

## ⚡ Performance Optimization
- Fast builds with Vite
- Optimized React rendering
- Reusable component architecture
- Efficient API communication with Axios

---

# 🛠️ Tech Stack

| Category | Technology |
|----------|-------------|
| Frontend | React.js |
| Backend | Node.js + Express.js |
| Database | MongoDB |
| Styling | Tailwind CSS |
| Build Tool | Vite |
| Authentication | Google OAuth |
| Form Handling | React Hook Form |
| API Communication | Axios |

---

# 🏗️ Project Structure

```bash
olx-clone/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── authentication/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
└── .gitignore
```

---

# ⚙️ Getting Started

## Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB database

---

## Clone Repository

```bash
git clone https://github.com/Zallu4435/olx-clone.git
cd olx-clone
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Backend Setup

```bash
cd server
npm install
npm start
```

---

# 📦 Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=3001
NODE_ENV=development
MONGODB_URI=your_mongodb_connection
CLIENT_URL=http://localhost:5173
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

# 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/user/signup` | Create new user |
| `POST` | `/user/signin` | Authenticate user |
| `GET` | `/products` | Fetch products |
| `GET` | `/products/:id` | Get product details |

---

# 🗄️ Database Schema

## User Model

```javascript
{
  username: String,
  email: String,
  password: String,
  phone: Number,
  createdAt: Date
}
```

---

# 🎨 Responsive Design

The application is fully optimized for:

- Mobile Devices
- Tablets
- Desktop Screens

Tailwind CSS utilities are used extensively to maintain responsive layouts and clean UI consistency.

---

# 🚀 Future Improvements

- Product posting functionality
- Real-time chat system
- Wishlist feature
- JWT authentication
- Payment integration
- Admin dashboard
- Advanced product filtering
- Notification system

---

# 📄 License

This project is licensed under the MIT License.

```text
MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

<div align="center">

Developed with ❤️ by Zallu

</div>
