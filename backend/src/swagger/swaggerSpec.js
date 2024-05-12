const express = require("express");
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'Linguist', 
      version: '1.0.0', 
      description: 'API documentation using Swagger', 
    },
    servers:[
        {
            url:'http://localhost:3001'
        }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ],
    supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'options', 'head', 'patch', 'trace']
  },
  apis: ['./v1/routes/index.js'], 
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = specs;
