# Personal Resume Website

A clean and responsive full-stack resume website built with React for the frontend and Express for the backend. The app dynamically fetches and displays structured resume data including overview, skills, education, projects, and work experience.

---

## Features

- **Dynamic Content:** Fetches resume sections via RESTful API endpoints.
- **Responsive UI:** Clean, accessible layout styled with CSS.
- **Structured Data:** Separate routes for overview, skills, education, projects, and experience.
- **Full-Stack Integration:** React frontend consuming Express backend API.
- **Error Handling:** Displays a friendly 404 message for unknown routes.

---

## Technologies Used

- **React** (Functional Components, Hooks)
- **Express.js** (API backend)
- **JavaScript**
- **CSS**
- **CORS** for cross-origin requests

---

## Installation

To run this project locally:

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/personal-resume-website.git
cd personal-resume-website

```

### 2. Install dependencies for both client and server:

```bash
# In client folder
cd client
npm install

# In server folder (open another terminal window/tab)
cd ../server
npm install

```

### 3. Start the backend server

```bash
cd server
npm start

```

You should see: **Server running at http://localhost:8000**

### 4. Start the frontend development server (in a separate terminal)

```bash
cd client
npm start

```

Open your browser at **http://localhost:3000**.

### Project Structure

```bash
personal-resume-website/
├── client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── .gitignore
├── server/
│   ├── node_modules/
│   ├── routes/
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── overview.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── .gitignore
├── .gitignore
└── README.md

```

## API Reference

The backend provides the following endpoints, returning JSON data for the resume:

| Route        | Description               |
|--------------|---------------------------|
| `/overview`  | Personal bio and summary  |
| `/skills`    | Array of relevant skills  |
| `/education` | List of education entries |
| `/projects`  | List of academic projects |
| `/experience`| Work experience details   |

## Notes

- Ensure the backend server is running before starting the frontend.
- The frontend expects the backend to be available at `http://localhost:8000`.
- CORS is enabled on the backend to allow cross-origin requests.
- The frontend fetches data on mount and renders each section accordingly.
