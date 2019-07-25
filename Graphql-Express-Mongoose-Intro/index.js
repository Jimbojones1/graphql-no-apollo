import express     from 'express';
import graphqlHTTP from 'express-graphql';
import schema      from './data/schema';
const cors = require('cors')
const app = express();



require('./db')

app.use(cors())


app.get('/', (req, res) => {
  res.send('app is working')
});




app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('server is running')
});

