import orderDataModel from '../../models/order/orderDataModel';
import dtime from 'time-formater';
import uuid from 'uuid/v4';

class OrderData {
	// 获取订单信息
	async getOrderData(req, res, next) {
		const {
			userInfo
		} = req.cookies;
		
		try {
			const orderDataList = await orderDataModel.find({
				user_id: JSON.parse(userInfo).user_id
			});
			
			res.send({
				code: 0,
				msg: null,
				data: orderDataList
			})
		} catch(err) {
			console.log('请先登录', err);
			res.send({
				code: -1,
				msg: '请先登录',
				data: []
			})
		}
	}
	// 添加订单
	async addOrder(req, res, next) {
		const {
			shopName,
			imgUrl,
			content,
			price,
			shop_id,
			count
		} = req.body;
		const {
			userInfo
		} = req.cookies;
		try {
			if(!userInfo || !JSON.parse(userInfo).user_id) {
				throw new Error('user_id参数错误');
			}
		} catch(err) {
			res.send({
				code: -1,
				msg: err.message,
				data: null
			})
			return;
		}
		try {
			const newOrder = {
				id: uuid(),
				user_id: JSON.parse(userInfo).user_id,
				shop_id,
				shopName,
				imgUrl,
				content,
				price,
				count,
				created_at: dtime(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'),
			}

			await orderDataModel.create(newOrder);
			res.send({
				code: 0,
				msg: '添加订单成功',
				data: null
			})
		} catch(err) {
			console.log('添加订单失败', err);
			res.send({
				code: -1,
				msg: '添加订单失败',
				data: null
			})
		}
	}
}

export default new OrderData();