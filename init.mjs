import app from './app.mjs';

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Server runs on http://localhost:' + PORT);
});