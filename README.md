# Next.js Authentication App

A modern authentication system built with **Next.js**, **NextAuth.js**, **MongoDB**, and **Tailwind CSS**.

## 🚀 Features

* User Authentication with NextAuth.js
* Google Login
* GitHub Login
* Protected Routes
* Session Management
* MongoDB Database Integration
* Responsive UI with Tailwind CSS
* Server Components Support
* App Router Support

## 🛠️ Technologies Used

* Next.js 16
* NextAuth.js
* MongoDB
* Tailwind CSS
* React
* JavaScript

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
```

Go to the project directory:

```bash
cd your-repository
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## 🔑 Environment Variables

Create a `.env.local` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string

AUTH_SECRET=your_secret_key

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

## 📂 Project Structure

```bash
src/
├── app/
├── components/
├── lib/
├── providers/
├── actions/
└── middleware.js
```

## 🔒 Authentication Flow

1. User clicks Sign In
2. NextAuth handles authentication
3. User session is created
4. Protected pages verify session
5. Authenticated users access private routes

## 📸 Screenshots

Add your project screenshots here.

## 🌐 Live Demo

```text
https://your-project.vercel.app
```

## 👨‍💻 Author

**Md Asik**

* GitHub: https://github.com/asik247
* LinkedIn: https://linkedin.com/in/asik5893

## ⭐ Support

If you like this project, give it a star on GitHub.
