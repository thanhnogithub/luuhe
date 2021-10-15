 
const fs = require("fs");
module.exports.config = {
name: "hack",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CHIP2502",
	description: "hack",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hack")==0 || (event.body.indexOf("Hack")==0)) {
		var msg = {
				body: "Đừng để tao tìm thấy mày :))",
				attachment: fs.createReadStream(__dirname + `/noprefix/hack.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}