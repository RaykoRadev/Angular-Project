Sure! Here's a cleaner, more professional version of your README, formatted for better readability and presentation on GitHub:

---

# 🎨 Handmade Cards App

A web application for sharing **handmade gift cards**.
🌐 **Live demo**: [handmade-cards-by-fresia.vercel.app](https://handmade-cards-by-fresia.vercel.app/)

> 💡 _Note: The backend is hosted on a free tier server. It may take up to **50 seconds** to wake up on first request and stays active for **15 minutes** after the last interaction._

---

## 🚀 Features

### 🧑 Guest Users Can:

- Browse all cards (Каталог)
- View card details (Детайли)
- Navigate via side menu and use pagination
- Visit the "About Us" (Свържи се с нас) page
- Login (Вход) / Register (Регистрация)

### 🔐 Authenticated Users Can:

Use this test account:

```
Username: Rayko
Password: asdasd
```

> _(Other test accounts available in comments below)_

- Create new cards (Създай нова картичка)
- Like / Unlike cards
- Edit or Delete **own** cards
- Logout

---

## 🧪 Project Requirements (Covered)

### Public Part

- ✅ Home Page (`/`)
- ✅ Login/Register (`/login`, `/register`)
- ✅ Browse cards without authentication
- ✅ View card details

### Private Part

- ✅ My Profile (`/me`, `/profile`)
- ✅ Create, Edit, Delete cards
- ✅ Like cards

### General Requirements

- ✅ At least 3 dynamic pages:

  - Home
  - Category
  - My Profile

- ✅ Specific views:

  - All cards list (Всички на едно място)
  - Individual card details

- ✅ Full CRUD for Cards collection
- ✅ Angular (Frontend) + Express + MongoDB (Backend)
- ✅ RESTful communication
- ✅ Authentication & Session handling
- ✅ Client-side routing to:

  - `/me`
  - `/login`
  - `/register`
  - `/profile`
  - `/category`
  - `/create`
  - `/:anniversary`
  - `/details/:id`
  - `/edit/:id`

### 🧱 Code & Architecture

- ✅ Meaningful Git commits
- ✅ Component-based structure (Smart/Dumb components)
- ✅ Strong folder organization
- ✅ Use of Angular-specific concepts:

  - TypeScript strict types
  - Interfaces & Types
  - Observables & RxJS (`tap`, `catchError`, `throwError`)
  - Lifecycle hooks (`ngOnInit`, `ngOnDestroy`, `ngAfterViewInit`)
  - Custom Pipes
  - Route Guards

### 🧪 Form Handling & Validation

- ✅ Snackbar error messages
- ✅ Form field validation (frontend & backend)
- ✅ Server-side error feedback

### 💅 UI/UX & Design

- ✅ Custom UI with Angular Material
- ✅ Responsive design
- ✅ Loading spinners
- ✅ Clean UX flow

---

## 🌍 Bonus Features

- 🌐 Geo Location in "About Us"
- 🖼️ ImgBB for image storage
- 🚀 Deployed on Vercel
- 📄 Pagination in cards catalog

---

## 🛠 Development Setup

### 🔧 Backend

Clone and run backend server:
👉 [https://github.com/vladinson009/express-server](https://github.com/vladinson009/express-server) _(Thanks!)_

```bash
npm install
npm run dev
```

### 💻 Frontend (Angular)

```bash
npm install
npm run start
```

Once both servers are running, go to:
`http://localhost:4200/`

---

## 🧪 Test Users

```plaintext
# Main test user:
Username: Rayko
Password: asdasd

# Additional users (optional):
# Moderator:
# Username: moderator
# Password: 123456

# User:
# Username: gabriela
# Password: 123456
```

---

Feel free to contribute or fork the project! 😊

---
