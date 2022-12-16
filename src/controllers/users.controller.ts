/**
 * @file src\controllers\users.controller.ts
 * @author Engineer
 * @date Dec, 2022
 * @brief user functionalities
**/

import { NextFunction, Request, Response } from 'express';
import userService from '../services/users.service';

class UsersController {
  public userService = new userService();

  /**
   * GET User By EmailId
   *
   * @param Request
   * @return Json data
   */
  public getUserByEmailId = async (req: Request, res: Response, next: NextFunction) => {
    const email: string = req.body.email;
    try {
      const userData: any = await this.userService.findUserByEmail(email);
      res.status(200).json({ data: userData, message: 'User Details have been retrieved successfully' });
    } catch (error) {
      next(error);
    }
  }
}

export default UsersController;
