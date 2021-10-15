 
const fs = require("fs");
module.exports.config = {
name: "chết",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CHIP2502",
	description: "ỏ",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("chết")==0 || (event.body.indexOf("Chết")==0)) {
		var msg = {
				body: "Tạm biệt cụ :3",
				attachment: fs.createReadStream(__dirname + `/noprefix/vinhbietcu.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}