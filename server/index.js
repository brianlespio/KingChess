import express from 'express';
import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import { randomUUID } from 'crypto';

const app = express();
const httpServer = createServer(app);
const io = new SocketServer(httpServer, {
  cors: {
    origin: '*',
  },
});

const games = {};

app.use(express.json());

app.post('/game/create', (req, res) => {
  const gameId = randomUUID();
  games[gameId] = { players: [] };
  res.json({ gameId });
});

app.post('/game/join/:gameId', (req, res) => {
  const { gameId } = req.params;
  if (!games[gameId]) {
    return res.status(404).json({ error: 'Game not found' });
  }
  res.json({ message: 'Joined', gameId });
});

io.on('connection', (socket) => {
  socket.on('joinGame', (gameId) => {
    if (games[gameId]) {
      socket.join(gameId);
    }
  });

  socket.on('move', ({ gameId, move }) => {
    if (games[gameId]) {
      socket.to(gameId).emit('move', move);
    }
  });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
