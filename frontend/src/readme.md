# Frontend Assignment

## 📌 Project Overview
This project is a **React-based frontend application** that interacts with a backend API. It includes user authentication, form validation, and state management using React Query.

## 🚀 Features
- User registration and login
- Form validation using **React Hook Form** and **Zod**
- API requests handled via **React Query**
- Styled with **CSS** (no Tailwind)

---

## 🛠️ Tech Stack
- **React** (TypeScript)
- **React Hook Form** (for form handling)
- **Zod** (for validation)
- **React Query** (for API state management)
- **CSS** (for styling)

---

## 📂 Project Structure
```
frontend/
│-- src/
│   │-- api/          # API request functions
│   │-- components/   # Reusable components
│   │-- pages/        # Application pages
│   │-- styles/       # CSS styles
│   │-- validation/   # Zod schemas
│   │-- App.tsx       # Root component
│   │-- main.tsx      # Entry point
│-- public/
│-- package.json
│-- tsconfig.json
│-- README.md
```

---

## 📦 Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/karankumar12345/Auth-Assignment2
cd Auth-Assignment2
```

### 2️⃣ Install Dependencies
```bash
npm install  # or yarn install
```

### 3️⃣ Run the Application
```bash
npm run dev  # or yarn dev
```

The application will be available at `http://localhost:5173` (or another port specified by Vite).

---

## 📡 API Integration
The frontend communicates with the backend API for user authentication. Update the **API base URL** in `/api/userApi.ts`:
```ts
const API_BASE_URL = "http://localhost:5000/api";
```

Ensure the backend is running before making API calls.

---

## 📜 Scripts
| Command        | Description |
|---------------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the project for production |
| `npm run lint` | Runs ESLint for code linting |

---

## 🖌️ Styling
All styles are written in **CSS** files inside the `styles/` directory.

---

## 🤝 Contributing
Feel free to fork and contribute! Follow these steps:
1. Fork the repository
2. Create a new branch (`feature-xyz`)
3. Commit your changes (`git commit -m "Added feature XYZ"`)
4. Push to the branch (`git push origin feature-xyz`)
5. Create a Pull Request

---

## 📝 License
This project is **MIT Licensed**. You can use and modify it freely.

---

## 📬 Contact
For questions or contributions, reach out via **[your email or GitHub profile](https://github.com/karankumar12345)**.

---

### ⭐ If you found this useful, please consider giving a star! ⭐

