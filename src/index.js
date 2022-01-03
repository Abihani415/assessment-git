import app from './server';

const port = 3001;

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});

export default server;
