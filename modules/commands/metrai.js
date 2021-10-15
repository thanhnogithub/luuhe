 
const fs = require("fs");
module.exports.config = {
name: "đẹp",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CHIP2502",
	description: "đẹp",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("đẹp")==0 || (event.body.indexOf("Đẹp")==0)) {
		var msg = {
				body: "Cái thứ mê trai bỏ đi này =))",
				attachment: fs.createReadStream(__dirname + `/noprefix/metrai.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}