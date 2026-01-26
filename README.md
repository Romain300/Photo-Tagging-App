– Full Project 

PixTag is a web-based interactive game inspired by *Where’s Waldo*, where players must find hidden characters in detailed images and compete for the best completion time.

The project is split into two main parts: a **backend** that manages data, game logic, and AI hints, and a **frontend** that delivers the interactive gameplay experience.

---

## Demo
https://pixtag.netlify.app/

---

## ✨ Key Features

- Interactive image-based character search game  
- Time-based scoring system with leaderboards  
- **AI-powered hint system** to assist players without spoiling solutions  
- Clean separation between frontend and backend  
- Responsive UI with a reusable global footer  

---

## 📂 Folder Structure

```
PixTag/
├── backend/       # Node.js backend with Express, Prisma, and AI integration
├── frontend/      # React frontend with game UI and footer component
└── README.md      # General project documentation
```

---

## 🧠 Backend

The backend handles all core logic, data persistence, and AI integration.

### Features

- REST API endpoints for:
  - Listing pictures
  - Retrieving picture details with characters
  - Adding players and recording times
  - Fetching leaderboard data
  - Generating **AI-based hints**
- Prisma ORM for database management (PostgreSQL)
- Secure handling of environment variables
- Seed scripts to populate initial images and characters

### Technologies

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- OpenAI API
- dotenv, CORS, express-validator

### Installation

```bash
cd backend
npm install
```

### Environment Variables

Create a `.env` file inside the `backend` folder:

```
DATABASE_URL=your_postgresql_database_url
PORT=3000
OPENAI_API_KEY=your_openai_api_key
```

### Running the Backend

```bash
npm run dev
```

The API will be available at:  
`http://localhost:3000`

---

## 🎨 Frontend

The frontend provides the user interface and gameplay experience.

### Features

- Picture selection screen
- Interactive game board to locate characters
- Click markers with contextual selection menu
- Timer tracking minutes and seconds
- Leaderboard display for fastest players
- **AI hint requests** integrated into gameplay
- **Reusable footer** displayed across all pages
- Fully responsive design for mobile and desktop

### Technologies

- React
- React Router
- CSS Modules
- Vite

### Installation

```bash
cd frontend
npm install
```

### Running the Frontend

```bash
npm run dev
```

The frontend will run at:  
`http://localhost:5173` (or the port provided by Vite)

---

## 🎮 How to Play

1. Start both backend and frontend servers.
2. Open the frontend in your browser.
3. Select a picture from the main menu.
4. Click on the image to guess character locations.
5. Request an AI hint if needed.
6. Find all characters as fast as possible.
7. Enter your name to save your time on the leaderboard.
8. Replay or select another image.

---

## 📝 Notes

- The game uses **percentage-based coordinates**, ensuring accurate click detection even when resizing the screen.
- The backend must be running for the frontend to function correctly, as all data and AI hints are served via API requests.

---

## 🛠️ Technologies Used

- **Frontend**: React, React Router, CSS Modules, Vite  
- **Backend**: Node.js, Express, Prisma, PostgreSQL  
- **AI**: OpenAI API  
- **Other Tools**: dotenv, CORS, express-validator  

---

## 👤 Author

**Romain Cappellotti**
