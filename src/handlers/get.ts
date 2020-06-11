"use strict";

import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";

export const getExample: APIGatewayProxyHandler = async (event) => {
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: "Hello World",
  };
  return response;
};
