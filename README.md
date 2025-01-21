# Auth Microservice

## Description

The `auth-ms` repository contains the code for a microservice responsible for managing authentication-related operations. This microservice is built using NestJS and communicates with other services via NATS messaging. Uses Prisma as the ORM for interactions with the MongoDB database.

The auth-ms performs the following functions:

- Validate tokens
- Allow user registration
- Allow login

**Authentication process**

The authentication guard, implemented in the client-gateway, sends the token to the auth-ms for verification. If it is valid, the request can continue. This guard is used in the endpoints of the client-gateway that you want to protect, so that it is only accessed by authenticated users.

Once the session has started, the auth-ms will sign a token that, used on subsequent occasions, will allow the user to access other protected endpoints.

## Architecture

![Image](https://github.com/user-attachments/assets/04a65ee4-d813-4c3c-9136-6914679a1aaf)

## Usage
To use the Authentication Microservice repository, follow the setup instructions provided in the README file of the Products-launcher repository.

[Products-launcher repository](https://github.com/nahuel-98/products-launcher) 
