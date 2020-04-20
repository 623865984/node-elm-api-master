import express from 'express';
const router = express.Router();

import OrderData from '../controller/order/orderData';


/**
 * @api {get} /common/getOrderData getOrderData
 * @apiDescription 获取订单信息
 * @apiGroup order
 * @apiVersion 1.0.0
 * 
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {String} msg 返回信息
 * @apiSuccess {Array} data 返回订单信息
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *      {
 *        "code": 0,
 *        "msg": null,
 *        "data": []
 *      }
 *
 */
router.get('/getOrderData', OrderData.getOrderData);

/**
 * @api {post} /user/addAddress addAddress
 * @apiDescription 添加用户地址
 * @apiGroup user
 * @apiVersion 1.0.0
 * 
 *
 * @apiSuccess {Number} code 成功状态码
 * @apiSuccess {String} msg 返回信息
 * @apiSuccess {null} data 
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *      {
 *        "code": 0,
 *        "msg": "添加订单成功",
 *        "data": null
 *      }
 *
 */
router.post('/addOrder', OrderData.addOrder);

export default router;