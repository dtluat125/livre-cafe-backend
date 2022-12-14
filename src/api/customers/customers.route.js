const express = require('express');

const CustomerController = require('./customers.controller');

/**
 * @swagger
 * components:
 *  schemas:
 *      Customer:
 *          type: object
 *          required:
 *              - firstName,
 *              - lastName
 *              - email
 *              - phone
 *          properties:
 *              id:
 *                  type: string
 *                  description: the auto-generated id
 *              firstName:
 *                  type: string
 *                  description: the customer's first name
 *              lastName:
 *                  type: string
 *                  description: the customer's last name
 *              email:
 *                  type: string
 *                  description: the customer's email
 *              phone:
 *                  type: number
 *                  description: the customer's phone number
 *              exchangeablePoints:
 *                  type: number
 *                  description: the bonus points which are exchangeable for vouchers
 *              rankingPoints:
 *                  type: number
 *                  description: the points for calculating the customer's rank
 *              rank:
 *                  type: string
 *                  enum: [Silver, Gold, Platinum, Diamond]
 *                  default: Silver
 *                  description: the customer's rank
 *              order:
 *                  type: string
 *                  description: the id of the processing order placed by the customer
 *              ordersHistory:
 *                  type: array
 *                  items:
 *                      type: string
 *                      description: the id of completed and cancelled orders placed by the customer
 */

/**
 * @swagger
 * tags:
 *  name: Customer
 *  description: Customer API
 */


const CustomerRouter = express.Router();

/**
 * @swagger
 * /customers:
 *  get:
 *      summary: Returns the list of all Customers
 *      tags: [Customer]
 *  post:
 *      summary: Add new customer
 *      tags: [Customer]
 */

CustomerRouter.route('/')
.get(CustomerController.getAllCustomers)
.post(CustomerController.createCustomer);

/**
 * @swagger
 * /customers/{id}:
 *  get:
 *      summary: Get the customer by id
 *      tags: [Customer]
 *  put:
 *      summary: Update the customer
 *      tags: [Customer]
 *  delete:
 *      summary: Remove the customer
 *      tags: [Customer]
 */


CustomerRouter.route('/:customerId')
.get(CustomerController.getCustomer)
.put(CustomerController.editCustomer)
.delete(CustomerController.deleteCustomer);

module.exports = CustomerRouter;
