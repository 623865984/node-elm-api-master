import mongoose from 'mongoose';
import orderData from '../../InitData/order';

const Schema = mongoose.Schema;

const orderDataSchema = new Schema({
	id: String,
	user_id: String,
	shop_id: String,
	imgUrl: String,
	shopName: String,
	content: String,
	price: String,
	count: Number,
	created_at: {
	type: Date,
	default: Date.now()
	},
})

orderDataSchema.index({
	id: 1
});

const OrderData = mongoose.model('OrderData', orderDataSchema);

// //如果数据库为空，添加初始化数据
// OrderData.findOne((err, data) => {
// 	if(!data) {
// 		orderData.forEach(item => {
// 			OrderData.create(item);
// 		})
// 	}
// })

export default OrderData