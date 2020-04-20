import common from './common';
import order from './order';
import shopping from './shopping';
import user from './user';

export default app => {
	app.use('/common', common);
	app.use('/order', order);
	app.use('/shopping', shopping);
	app.use('/user', user);
}