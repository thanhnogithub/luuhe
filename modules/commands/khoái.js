 
const fs = require("fs");
module.exports.config = {
name: "khoái",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CHIP2502",
	description: "khoái",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("khoái")==0 || (event.body.indexOf("Khoái")==0)) {
		var msg = {
				body: "chảy nước miếng chảy nước miếng :>>>",
				attachment: fs.createReadStream(__dirname + `/noprefix/khoai.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}