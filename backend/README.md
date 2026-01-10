# PixTag BACKEND

A RESTful API for a "Where’s Waldo"-style picture game. This project allows users to view pictures, track characters within images, and manage players’ scores. Built with **Node.js**, **Express**, and **Prisma** with a **PostgreSQL** database.

---

## Table of Contents

- [Features](#features)  
- [Technologies](#technologies)  
- [Project Structure](#project-structure)  
- [API Endpoints](#api-endpoints)  
- [Database](#database)  
- [Scripts](#scripts)  
- [Setup & Installation](#setup--installation)  
- [Usage](#usage)  
- [License](#license)  

---

## Features

- List all pictures and their associated characters  
- Retrieve details of a single picture, including characters and players  
- Add a new player with a name, time, and picture ID  
- Retrieve a list of players for a specific picture  
- Validation for player input to ensure data integrity  
- Seed and clear scripts for database management  

---

## Technologies

- Node.js  
- Express.js  
- Prisma ORM  
- PostgreSQL  
- dotenv for environment variables  
- express-validator for input validation  
- cors for handling cross-origin requests  

---

## Project Structure

```
project-root/
│
├─ controllers/
│   ├─ picturesController.js
│   └─ playersController.js
│
├─ db/
│   ├─ client.js
│   ├─ queries.js
|   ├─ seed.js
│   └─ clearData.js
│
├─ routes/
│   ├─ pictures.js
│   ├─ players.js
│   └─ index.js
│
├─ app.js
├─ package.json
├─ .env
└─ README.md
```

---

## API Endpoints

### Pictures

| Method | Endpoint           | Description                                    |
|--------|------------------|------------------------------------------------|
| GET    | `/pictures`        | Get a list of all pictures                     |
| GET    | `/pictures/:id`    | Get a single picture with characters & players |

### Players

| Method | Endpoint            | Description                                    |
|--------|-------------------|------------------------------------------------|
| POST   | `/players`          | Add a new player (requires `name`, `time`, `pictureId`) |
| GET    | `/players/:pictureId` | Get all players for a specific picture       |

---

## Database

- **Prisma** is used to connect to the database.  
- Two main tables:  

### `image`
- `id` (Primary Key)  
- `title`  
- `url`  
- Relations: `characters`, `players`  

### `character`
- `id` (Primary Key)  
- `name`  
- `xMin`, `xMax`, `yMin`, `yMax` (for coordinate mapping within the image)  
- `imageId` (Foreign Key)  

### `player`
- `id` (Primary Key)  
- `name`  
- `time` (score/time)  
- `imageId` (Foreign Key)  

---

## Scripts

- **Seed Database**

```bash
node scripts/seed.js
```

Populates the database with sample image and characters.

- **Clear Database**

```bash
node scripts/clearData.js
```

Deletes all `characters` and `images` data.

---

## Setup & Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root:

```
DATABASE_URL="postgresql://user:password@host:port/dbname"
PORT=3000
```

4. Migrate database (if needed):

```bash
npx prisma migrate dev --name init
```

5. Seed the database:

```bash
node scripts/seed.js
```

6. Start the server:

```bash
node app.js
```

---

## Usage

- Access the API:

```bash
GET http://localhost:3000/pictures
GET http://localhost:3000/pictures/1
POST http://localhost:3000/players
GET http://localhost:3000/players/1
```

- Sample POST request body to add a player:

```json
{
  "name": "Player1",
  "time": 120,
  "pictureId": 1
}
```

---

## License

This project is licensed under the MIT License.

