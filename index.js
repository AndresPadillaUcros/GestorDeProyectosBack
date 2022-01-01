import Express from 'express';
import Cors from 'cors';
import {ApolloServer} from 'apollo-server-express';
import dotenv from 'dotenv';
import {conectarBD} from './db/db.js';
import {tipos} from './graphql/tipos.js'
import {resolvers } from './graphql/resolvers.js'

dotenv.config();

const server= new ApolloServer({
    typeDefs:tipos,
    resolvers:resolvers,
})

const app= Express();

app.use(Express.json());
app.use(Cors());


app.listen({port:process.env.PORT || 4000},async()=>{
    await conectarBD();
    await server.start();

    server.applyMiddleware({ app });
    console.log("servidor listo")
})