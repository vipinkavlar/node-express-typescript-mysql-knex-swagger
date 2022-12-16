import knex from 'knex'
import {createContainer, asValue, InjectionMode} from 'awilix'

interface KnexConfig {
  [key: string]: object;
}

const config: KnexConfig = {
  developement: {
    client: 'mysql2',
    connection: {
      host : process.env.DB_HOST, 
      port : process.env.DB_PORT, 
      user : process.env.DB_USER, 
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME
    }
  },
  production : {

  }
};

// Create the container and set the injectionMode to PROXY (which is also the default).
const container = createContainer({
  injectionMode: InjectionMode.PROXY
})
/*
export const connect = () => new Promise(async (resolve, reject) => {
  try {
    const connection = knex(config['developement'])
    await connection.raw('SELECT 1')

    container.register({
      knex: asValue(connection),
    })
    resolve(connection)
  } catch (e) {
    console.log("inside error : ", e);
    reject(e)
  }
});*/

export const connect = async () => {
  const connection = knex(config['developement'])
  // Waiting for a connection to be established
  await connection.raw('SELECT 1')

  return connection
}