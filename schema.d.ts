/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/user": {
    /** @description Welcome to swagger-jsdoc! */
    post: {
      requestBody: {
        content: {
          "application/json": components["schemas"]["userPassword"];
        };
      };
      responses: {
        /** @description Returns a mysterious string. */
        200: {
          content: {
            "application/json": components["schemas"]["userPassword"];
          };
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    userPassword: {
      username: string;
      password: string;
    };
    Error: {
      message?: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;