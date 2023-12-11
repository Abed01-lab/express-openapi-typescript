import { Router, Response, Request } from "express";
import { paths } from "../schema/schema";

export const userRouter = Router();

/**
 *  @openapi
 *  /user:
 *    post:
 *      description: Welcome to swagger-jsdoc!
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/userPassword'
 *      responses:
 *        200:
 *          description: Returns a mysterious string.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/userPassword'
 */

type userResponse = paths["/user"]["post"]["responses"]["200"]["content"]["application/json"];
type userRequest = paths["/user"]["post"]["requestBody"]["content"]["application/json"];
userRouter.post("/user", async (req: Request<{}, {}, userRequest>, res: Response<userResponse>) => {
  const { username, password } = req.body;
  console.log(username, password);
  res.status(200).json({ username, password });
});
