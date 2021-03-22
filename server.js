const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const cors = require('cors');
const schema = require('./schema');
const path = require('path');

const app = express();

app.use(cors());


app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
