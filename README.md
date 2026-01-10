# PixTag - Full Project

PixTag is a web-based interactive game where players find hidden characters in images and compete for the best time. The project is divided into two main parts: **Backend** and **Frontend**.

- **Backend**: Handles data storage, API endpoints, and game logic using Node.js, Express, and Prisma with a PostgreSQL database.
- **Frontend**: Built with React, it provides the user interface, game interaction, and leaderboard display.

---

## Folder Structure

```
PixTag/
├── backend/       # Node.js backend with Express and Prisma
├── frontend/      # React frontend
└── README.md      # This general README file
```

---

## Backend

The backend folder contains the API and database logic.

### Features
- REST API endpoints for:
  - Listing pictures
  - Retrieving picture details with characters
  - Adding players
  - Getting leaderboard data
- Uses Prisma ORM for database management (PostgreSQL)
- Includes seed scripts to populate initial images and characters

### Installation
```bash
cd backend
npm install
```

### Environment Variables
Create a `.env` file in the `backend` folder with:
```
DATABASE_URL=your_postgresql_database_url
PORT=3000
```

### Running the Backend
```bash
npm run dev  # Runs the server in development mode
```
The backend API will be available at `http://localhost:3000`.

---

## Frontend

The frontend folder contains the React app.

### Features
- Main page to select pictures
- Interactive game board to find characters
- Click markers and dynamic choice menu
- Timer tracking minutes and seconds
- Leaderboard for fastest players
- Responsive design for mobile devices

### Installation
```bash
cd frontend
npm install
```

### Running the Frontend
```bash
npm run dev
```
The frontend will run at `http://localhost:5173` (or the port provided by Vite).

---

## How to Play

1. Start both backend and frontend servers.
2. Open the frontend in your browser.
3. Select a picture from the main menu.
4. Click on the image to guess character locations.
5. Submit the correct character and repeat until all are found.
6. Enter your name to save your time to the leaderboard.
7. Replay or choose another image from the menu.

---

## Notes

- The game uses **percentage-based coordinates** for click markers, ensuring correct placement even when resizing the screen.
- Ensure the backend is running before playing the game, as the frontend relies on API requests for pictures and leaderboard data.

---

## Technologies Used

- **Frontend**: React, React Router, CSS Modules, Vite
- **Backend**: Node.js, Express, Prisma, PostgreSQL
- **Other Tools**: dotenv, CORS, express-validator

---

## Author

Romain Cappellotti

