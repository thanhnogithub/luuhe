 
const fs = require("fs");
module.exports.config = {
name: "emancomchua",
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
	if (event.body.indexOf("em ăn")==0 || (event.body.indexOf("Em ăn")==0)) {
		var msg = {
				body: "ëm ăn ċơm ċhưä:>>>",
				attachment: fs.createReadStream(__dirname + `/noprefix/eman.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}