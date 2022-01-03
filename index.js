import Express from 'express';
import Cors from 'cors';
import {ApolloServer} from 'apollo-server-express';
import dotenv from 'dotenv';
import {conectarBD} from './db/db.js';
import {tipos} from './graphql/tipos.js'
import {resolvers } from './graphql/resolvers.js'
import {validateToken} from './utils/tokenUtils.js'

dotenv.config();

const getUserData = (token) => {
  const verificacion=validateToken(token.split(' ')[1]);
  if(verificacion.data){
    return verificacion.data;
  }else{
    return null;
  }
};

const server= new ApolloServer({ 
    typeDefs:tipos,
    resolvers:resolvers,
    context:({req})=>{
      const token=req.headers?.authorization ??null;
      if(token){
        const userData= getUserData(token);
        if(userData){
          return {userData}
        }
      }
      return null;
    }
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