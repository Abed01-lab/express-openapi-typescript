import { Application } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import * as OpenApiValidator from "express-openapi-validator";

export const swaggerSpecification = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hello world",
      version: "1.0.0",
      description: "Testing OPENAPI specification",
    },
  },
  apis: ["src/controller/*.ts", "src/routes/*.ts", "src/error/error.ts"],
});

export function initSwagger(app: Application) {
  app.get("/openapi.json", (_req, res) => res.send(swaggerSpecification));
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpecification));
  app.use(
    OpenApiValidator.middleware({
      apiSpec: swaggerSpecification as any,
      validateRequests: true,
      validateResponses: false,
    })
  );
}
