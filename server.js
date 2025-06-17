const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());

app.get('/api/status', (req, res) => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const weather = 'Sunny, 82°F 🌞';
  const bank = '98452.11';
  res.json({ time, weather, bank });
});

app.listen(PORT, () => console.log(`🔌 LacedSim API running on port ${PORT}`));
