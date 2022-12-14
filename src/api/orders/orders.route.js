const express = require('express');
const OrdersController = require('./orders.controller');

const OrdersRouter = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Order:
 *          type: object
 *          required:
 *              - status
 *          properties:
 *              id:
 *                  type: string
 *                  description: the auto-generated id
 *              itemsOrdered:
 *                  type: array
 *                  items:
 *                      type: object
 *                      required:
 *                              - productType
 *                              - product
 *                              - quantity
 *                      properties:
 *                              productType:
 *                                  type: string
 *                                  enum: [books, drinks]
 *                                  description: product type
 *                              product:
 *                                  type: string
 *                                  description: product id
 *                              quantity:
 *                                  type: number
 *                                  description: the number of products in cart
 *                              additionalRequirements:
 *                                  type: string
 *                                  description: additional requirements for the product
 *              status:
 *                  type: string
 *                  enum: [processing, completed, cancelled]
 *                  description: the status of the order
 *              customer:
 *                  type: string
 *                  description: the id of the customer placed the order
 *              totalCost:
 *                  type: number
 *                  description: the total cost of the order
 *              reservation:
 *                  type: string
 *                  description: the corresponding reservation's id
 *                  default: null
 *              appliedVoucher:
 *                  type: string
 *                  description: the id of the voucher applied to this order
 *                  default: null
 */

/**
 * @swagger
 * tags:
 *  name: Orders
 *  description: Orders API
 */

/**
 * @swagger
 * /orders:
 *  get:
 *      summary: Returns the list of all processing orders
 *      tags: [Orders]
 *  post:
 *      summary: Place new order
 *      tags: [Orders]
 */

OrdersRouter.route('/')
.get(OrdersController.getAllOrders)
.post(OrdersController.createOrder);


OrdersRouter.route('/history')
.get(OrdersController.getOrdersHistory);

/**
 * @swagger
 * /orders/{id}:
 *  get:
 *      summary: Get the order by id
 *      tags: [Orders]
 *  put:
 *      summary: Update the processing order
 *      tags: [Orders]
 *  delete:
 *      summary: Remove the processing order
 *      tags: [Orders]
 */

OrdersRouter.route('/:orderId')
.get(OrdersController.getOrder)
.put(OrdersController.editOrder)
.delete(OrdersController.deleteOrder);

module.exports = OrdersRouter;
