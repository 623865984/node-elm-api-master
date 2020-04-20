import mongoose from 'mongoose';
import config from 'config-lite';
import chalk from 'chalk';
import dtime from 'time-formater';
mongoose.connect(config.url, {
	useMongoClient: true
});
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open', () => {
	console.log(
		chalk.green('连接数据库成功┗|｀O′|┛ 嗷~~')
	);
	console.log(dtime(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'));
})

db.on('error', function(error) {
	console.error(
		chalk.red('Error in MongoDb connection: ' + error)
	);
	mongoose.disconnect();
});

db.on('close', function() {
	console.log(
		chalk.red('数据库断开，重新连接数据库')
	);
	mongoose.connect(config.url, {
		server: {
			auto_reconnect: true
		}
	});
});

export default db;