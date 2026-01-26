# PixTag BACKEND 

A RESTful API for a *Where’s Waldo*-style picture game. PixTag allows users to view pictures, track characters within images, manage players’ scores, and request **AI-generated hints**.

Built with **Node.js**, **Express**, and **Prisma** using a **PostgreSQL** database. The backend also securely integrates the **OpenAI API** to generate non-spoiling, contextual hints for gameplay.

---

## Table of Contents

- Features  
- Technologies  
- Project Structure  
- API Endpoints  
- AI Hint System  
- Database  
- Scripts  
- Setup & Installation  
- Usage  
- License  

---

## Features

- List all pictures and their associated characters  
- Retrieve details of a single picture, including characters and players  
- Add a new player with a name, time, and picture ID  
- Retrieve a list of players for a specific picture  
- Input validation to ensure data integrity  
- **AI-powered hint generation** based on character position  
- Seed and clear scripts for database management  

---

## Technologies

- Node.js  
- Express.js  
- Prisma ORM  
- PostgreSQL  
- OpenAI API  
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
│   ├─ playersController.js
│   └─ hintsController.js
│
├─ db/
│   ├─ client.js
│   ├─ queries.js
│   ├─ seed.js
│   └─ clearData.js
│
├─ routes/
│   ├─ pictures.js
│   ├─ players.js
│   ├─ hints.js
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

| Method | Endpoint            | Description                                    |
|------|---------------------|------------------------------------------------|
| GET  | `/pictures`          | Get a list of all pictures                     |
| GET  | `/pictures/:id`      | Get a single picture with characters & players |

### Players

| Method | Endpoint               | Description                                      |
|------|------------------------|--------------------------------------------------|
| POST | `/players`              | Add a new player (`name`, `time`, `pictureId`)   |
| GET  | `/players/:pictureId`   | Get all players for a specific picture           |

### AI Hints

| Method | Endpoint | Description |
|------|----------|-------------|
| POST | `/hints` | Generate an AI hint for a character |

---

## AI Hint System 🤖

PixTag uses the OpenAI API to generate short, playful hints that help players locate characters without revealing exact positions.

### How it works

1. The frontend sends:
   - `pictureTitle`
   - `character` (with bounding box coordinates)
2. The backend:
   - Calculates the character’s **relative position** (top/middle/bottom & left/center/right)
   - Sends a constrained prompt to OpenAI
3. The AI returns a **non-spoiling hint**
4. The hint is sent back to the frontend

### Example Request Body

```json
{
  "pictureTitle": "Beach Scene",
  "character": {
    "name": "Waldo",
    "xMin": 0.2,
    "xMax": 0.3,
    "yMin": 0.4,
    "yMax": 0.5
  }
}
```

### Example Response

```json
{
  "hint": "He’s hanging out somewhere in the middle-left part of the scene."
}
```

---

## Database

Prisma is used as the ORM.

### `image`
- `id` (Primary Key)
- `title`
- `url`
- Relations: `characters`, `players`

### `character`
- `id` (Primary Key)
- `name`
- `xMin`, `xMax`, `yMin`, `yMax`
- `imageId` (Foreign Key)

### `player`
- `id` (Primary Key)
- `name`
- `time`
- `imageId` (Foreign Key)

---

## Scripts

### Seed Database

```bash
node scripts/seed.js
```

Populates the database with sample images and characters.

### Clear Database

```bash
node scripts/clearData.js
```

Deletes all images, characters, and related data.

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

Create a `.env` file:

```
DATABASE_URL="postgresql://user:password@host:port/dbname"
PORT=3000
OPENAI_API_KEY=your_openai_api_key
```

4. Run database migrations:

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

Example requests:

```bash
GET  http://localhost:3000/pictures
GET  http://localhost:3000/pictures/1
POST http://localhost:3000/players
POST http://localhost:3000/hints
```

### Sample Player POST Body

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


