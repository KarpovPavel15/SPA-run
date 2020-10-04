const express = require('express');
const app = express();

app.use(express.json({extended: true}));

app.use('/api/auth', require('./src/back-end/routes/authRoute'));
app.use('/api', require('./src/back-end/info-data/info-data'));

app.listen(5000, () => console.log('Server started on port 5000'));
