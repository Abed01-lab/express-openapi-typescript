/**
 *  @openapi
 *  components:
 *    schemas:
 *      userPassword:
 *        type: object
 *        required:
 *          - username
 *          - password
 *        properties:
 *          username:
 *            type: string
 *          password:
 *            type: string
 */

export class User {
  private username: string;
  private password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
