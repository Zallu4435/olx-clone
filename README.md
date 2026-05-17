# 🛍️ OLX Clone

> A modern, full-stack classifieds marketplace application built with React, Node.js, and MongoDB. Browse, authenticate, and list products seamlessly with an intuitive user interface and robust backend infrastructure.

[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat&logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.8-13aa52?style=flat&logo=mongodb)](https://www.mongodb.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38b2ac?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=flat&logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🌟 Overview

OLX Clone is a comprehensive marketplace application that replicates the core functionality of popular online classifieds platforms. Users can browse products from a rich product catalog, authenticate securely with email or phone-based sign-in, and manage their listings. The application features a responsive design that works seamlessly across all devices.

Built with modern web technologies, this project demonstrates best practices in full-stack development, including component-based architecture, RESTful API design, database modeling, and user authentication workflows.

---

## ✨ Key Features

### 🔐 **Authentication System**
- **User Registration**: Sign up with email, phone number, username, and secure password
- **Dual Sign-In**: Flexible authentication via email or phone number
- **Google OAuth Integration**: Quick authentication using Google credentials
- **Form Validation**: React Hook Form with real-time error feedback

### 📦 **Product Management**
- **Product Listing**: Browse extensive product catalog fetched from FakeStore API
- **Search Functionality**: Real-time search across products
- **Category Filtering**: Filter products by categories (Electronics, Jewelry, Clothing, etc.)
- **Product Details**: Detailed view of individual product specifications

### 🎨 **User Interface**
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Navbar**: Navigation with search and category browsing
- **Interactive Components**: Smooth user interactions with React icons
- **Toast Notifications**: Real-time user feedback with React Toastify

### 🔧 **Developer Experience**
- **Hot Module Replacement**: Instant code updates with Vite
- **ESLint Configured**: Code quality and consistency enforcement
- **Form State Management**: React Hook Form for efficient form handling
- **API Integration**: Axios for seamless HTTP requests

---

## 🏗️ Architecture & Project Structure

```
olx-clone/
├── client/                          # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Main.jsx            # Main landing page component
│   │   │   ├── Home.jsx            # Home page with product grid
│   │   │   ├── Details.jsx         # Product detail view
│   │   │   ├── Navbar.jsx          # Navigation component
│   │   │   ├── Menubar.jsx         # Category menu
│   │   │   ├── Footer.jsx          # Footer component
│   │   │   └── authentication/
│   │   │       └── LoginPage.jsx   # Login/Registration page
│   │   ├── App.jsx                 # Root app component with routing
│   │   ├── main.jsx                # Application entry point
│   │   └── index.css               # Global styles
│   ├── index.html                  # HTML template
│   ├── package.json                # Frontend dependencies
│   ├── vite.config.js              # Vite configuration
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   ├── eslint.config.js            # ESLint rules
│   └── .gitignore                  # Git ignore patterns
│
├── server/                         # Express.js backend application
│   ├── config/
│   │   └── db.js                   # MongoDB connection configuration
│   ├── models/
│   │   └── userModel.js            # User schema and model
│   ├── routes/
│   │   └── userRoutes.js           # User authentication routes
│   ├── index.js                    # Server entry point
│   ├── package.json                # Backend dependencies
│   └── .env                        # Environment variables (local)
│
└── .gitignore                      # Root git ignore
```

### **Architecture Explanation**

**Frontend (Client)**
- Built with React 18 for component-based UI
- Vite as the build tool for fast development and optimized production builds
- React Router for client-side navigation
- Tailwind CSS for utility-first styling
- React Hook Form for efficient form state management
- Axios for API communication

**Backend (Server)**
- Express.js web framework for handling HTTP requests
- MongoDB with Mongoose ODM for data persistence
- CORS enabled for secure cross-origin requests
- Nodemon for auto-reload during development
- RESTful API design with user authentication endpoints

**Data Flow**
1. User interacts with React components
2. Components make HTTP requests via Axios
3. Express server processes requests and validates data
4. Mongoose models interact with MongoDB
5. Server returns JSON responses
6. React updates UI state with received data

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or cloud instance - MongoDB Atlas recommended)
- **Git** for version control

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/Zallu4435/olx-clone.git
cd olx-clone
```

#### 2. Setup Frontend

```bash
cd client
npm install
```

#### 3. Setup Backend

```bash
cd ../server
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# MongoDB Connection
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

# CORS Configuration
CLIENT_URL=http://localhost:5173

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
```

### Environment Variables Guide

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port number | `3001` |
| `NODE_ENV` | Environment mode | `development` or `production` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` |
| `CLIENT_URL` | Frontend URL for CORS | `http://localhost:5173` |
| `GOOGLE_CLIENT_ID` | Google OAuth credentials | `xxx.apps.googleusercontent.com` |

---

## 📜 Available Scripts

### Frontend Commands

```bash
cd client

# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

### Backend Commands

```bash
cd server

# Start server with auto-reload (nodemon)
npm start

# Run tests (placeholder)
npm test
```

---

## 🔌 API Endpoints

### User Routes (`/user`)

#### **Sign Up**
- **Endpoint**: `POST /user/signup`
- **Description**: Create a new user account
- **Request Body**:
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "phone": 9876543210,
  "password": "securePassword123",
  "confirmPassword": "securePassword123"
}
```
- **Response** (201):
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "username": "johndoe",
  "email": "john@example.com",
  "phone": 9876543210,
  "createdAt": "2024-11-14T09:43:40.000Z"
}
```
- **Error** (400): Passwords don't match / User already exists

#### **Sign In**
- **Endpoint**: `POST /user/signin`
- **Description**: Authenticate user via email or phone
- **Request Body (Email)**:
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```
- **Request Body (Phone)**:
```json
{
  "phone": 9876543210,
  "password": "securePassword123"
}
```
- **Response** (200):
```json
{
  "message": "Login successful"
}
```
- **Error** (400): Invalid credentials

---

## 🗄️ Database Schema

### User Model

```javascript
{
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 4
  },
  phone: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

---

## 🎨 Design & Performance

### Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Flexbox & Grid**: Modern layout techniques for responsive UI
- **Touch-Friendly**: Larger tap targets and touch-optimized interactions

### Performance Optimizations
- **Code Splitting**: Lazy loading of components with React Router
- **Fast Build**: Vite enables instant server start and optimized builds
- **Optimized Images**: FakeStore API provides optimized product images
- **Minification**: Automated CSS and JavaScript minification in production

### Accessibility Features
- **Semantic HTML**: Proper use of HTML5 semantic elements
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility support
- **Color Contrast**: WCAG compliant color combinations

---

## 📦 Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Frontend Framework** | React | 18.3 |
| **Build Tool** | Vite | 5.4 |
| **Styling** | Tailwind CSS | 3.4 |
| **Form Management** | React Hook Form | 7.53 |
| **HTTP Client** | Axios | 1.7 |
| **Routing** | React Router DOM | 6.28 |
| **UI Components** | React Icons | 5.3 |
| **Notifications** | React Toastify | 10.0 |
| **Authentication** | Google OAuth | 0.12 |
| **Backend Framework** | Express.js | 4.21 |
| **Database** | MongoDB | 8.8 |
| **Database ODM** | Mongoose | 8.8 |
| **Dev Server** | Nodemon | 3.1 |
| **Linting** | ESLint | 9.13 |
| **CSS Processing** | PostCSS & Autoprefixer | 8.4 |

---

## 🚢 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Prepare Build**
```bash
cd client
npm run build
```

2. **Deploy to Vercel**
```bash
npm install -g vercel
vercel
```

3. **Deploy to Netlify**
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

### Backend Deployment (Heroku/Railway)

1. **Create Procfile**
```
web: node server/index.js
```

2. **Deploy to Heroku**
```bash
heroku create your-app-name
heroku config:set MONGODB_URI=your_mongodb_uri
git push heroku main
```

3. **Deploy to Railway**
   - Connect GitHub repository
   - Set environment variables
   - Deploy automatically on push

### Environment Setup for Production

Update `.env` for production:
```env
PORT=3001
NODE_ENV=production
MONGODB_URI=mongodb+srv://prod_user:prod_password@prod-cluster.mongodb.net/olx_clone
CLIENT_URL=https://your-frontend-domain.com
```

---

## 🔮 Future Improvements

- [ ] **JWT Authentication**: Implement secure token-based authentication
- [ ] **Product Listings**: Allow users to create and manage their own product listings
- [ ] **Image Upload**: Support file uploads for product images
- [ ] **Payment Integration**: Stripe or Razorpay integration for transactions
- [ ] **Chat System**: Real-time messaging between buyers and sellers
- [ ] **Reviews & Ratings**: User feedback system for products and sellers
- [ ] **Wishlist**: Save favorite products for later
- [ ] **Advanced Search**: Filters, sorting, and full-text search
- [ ] **Notifications**: Email and push notifications for user actions
- [ ] **Dashboard**: User profile and order management dashboard
- [ ] **Mobile App**: React Native version for iOS/Android
- [ ] **Admin Panel**: Dashboard for platform management
- [ ] **Analytics**: Track user behavior and sales metrics
- [ ] **Security Enhancements**: Password hashing (bcrypt), HTTPS enforcement
- [ ] **API Documentation**: Swagger/OpenAPI documentation

---

## 🤝 Contributing

Contributions are welcome! To contribute to this project:

1. **Fork the Repository**
```bash
git clone https://github.com/YOUR_USERNAME/olx-clone.git
cd olx-clone
```

2. **Create a Feature Branch**
```bash
git checkout -b feature/your-feature-name
```

3. **Make Your Changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic

4. **Commit Your Changes**
```bash
git add .
git commit -m "feat: Add your feature description"
```

5. **Push to Your Fork**
```bash
git push origin feature/your-feature-name
```

6. **Open a Pull Request**
   - Describe the changes made
   - Reference any related issues
   - Include screenshots for UI changes

### Contribution Guidelines
- Follow the existing code structure
- Use meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed
- Keep PRs focused on a single feature/fix

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
You are free to:
- ✅ Use this software for any purpose
- ✅ Copy, modify, and distribute
- ✅ Include in proprietary applications

With the conditions that:
- 📋 Include the license and copyright notice
- 📌 The software is provided "as-is" without warranty

```
MIT License

Copyright (c) 2024 Zallu4435

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 📞 Support & Contact

- **GitHub Issues**: [Report bugs or request features](https://github.com/Zallu4435/olx-clone/issues)
- **GitHub Discussions**: [Ask questions and share ideas](https://github.com/Zallu4435/olx-clone/discussions)
- **Author**: [Zallu4435](https://github.com/Zallu4435)

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Mongoose Guide](https://mongoosejs.com)
- [React Router Documentation](https://reactrouter.com)
- [Axios Documentation](https://axios-http.com)

---

## 🎯 Quick Links

| Link | Description |
|------|-------------|
| [Repository](https://github.com/Zallu4435/olx-clone) | GitHub repository |
| [Issues](https://github.com/Zallu4435/olx-clone/issues) | Bug reports and feature requests |
| [Discussions](https://github.com/Zallu4435/olx-clone/discussions) | Community discussions |
| [Wiki](https://github.com/Zallu4435/olx-clone/wiki) | Project wiki and guides |

---

<div align="center">

**Made with ❤️ by [Zallu4435](https://github.com/Zallu4435)**

Give a ⭐ if you found this project helpful!

</div>