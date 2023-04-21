const app = require('./src/app')
const { conn } = require('./src/db.js');
const {getAllGenres} = require('./src/controllers/ApyAndDb/getGenreData')
const {insertGamesDb} = require('./src/controllers/ApyAndDb/insertGamesApiDB')
const {getAllPlatforms} = require('./src/controllers/ApyAndDb/getPlatforms')
//const PORT = 3001;


conn.sync({ alter: true }).then(() => {
  // getAllGenres()
  // getAllPlatforms()
  // insertGamesDb()
  app.listen(process.env.PORT, () => {
  console.log('%s listening at', process.env.PORT); // eslint-disable-line no-console
  });
}); 
