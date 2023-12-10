import express, { NextFunction, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import * as OpenApiValidator from "express-openapi-validator";
import { paths } from "./schema";

const app = express();
const port = 3000;

const swaggerSpecification = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hello world",
      version: "1.0.0",
      description: "Testing OPENAPI specification",
    },
  },
  apis: ["./index.ts"],
});

app.use(express.json());
app.get("/swagger.json", (req, res) => res.send(swaggerSpecification));
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpecification));
console.log(swaggerSpecification);
app.use(
  OpenApiValidator.middleware({
    apiSpec: swaggerSpecification as any,
    validateRequests: true,
    validateResponses: false,
  })
);

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

/**
 * @openapi
 * components:
 *   schemas:
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 */

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // format error
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

type userResponse = paths["/user"]["post"]["requestBody"]["content"]["application/json"];
app.post("/user", async (req, res: Response<userResponse>) => {
  const { username, password } = req.body;
  console.log(username, password);
  res.status(200).json({ username, password });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
