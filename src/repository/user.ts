import { KnexRepository } from '../repository/base'

export interface User {
  id: string
  first_name: string
  email: string
}

// User repository with code implementation from BaseRepository
export class UserRepository extends KnexRepository<User> {
  
  // here, we can create all specific stuffs of User Repository
  getUserDetails(email: string): Promise<boolean> {
    const userdetails =   this.qb.where({'email' : email}).select();
    return userdetails;
  }
}
