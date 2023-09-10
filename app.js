const express = require('express');
const PORT = parseInt(process.env.PORT || '8080');
const app = express();
const { logs, SeverityNumber } = require('@opentelemetry/api-logs');
const logger = logs.getLogger('app', '0.1.0');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

app.get('/rolldice', (req, res) => {
  const randNum = getRandomNumber(1, 6)
  const attributes = {
    'roll': randNum
  }
  logger.emit({
    severityNumber: SeverityNumber.INFO,
    body: "exiting /rolldice",
    attributes
  });
  res.send(randNum.toString() + "\n");
});

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});