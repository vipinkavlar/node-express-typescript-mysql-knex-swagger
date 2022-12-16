/**
 * @file src\services\users.service.ts
 * @author Engineer
 * @date Dec, 2022
 * @brief user services
**/

import {UserRepository} from '../repository/user'
import * as dbConnection from '../utils/db';

class UserService {
  
  /**
   * GET User By EmailId
   *
   * @param email:string
   * @return Json data
   */  
  public async findUserByEmail(email: string) {
    const conn = await dbConnection.connect()
    const repository = new UserRepository(conn, 'users')
    const userDetails = await repository.getUserDetails(email);
    return userDetails;
  }
}

export default UserService;
