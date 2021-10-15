
const fs = require("fs");
module.exports.config = {
name: "kawai",
version: "1.0.1",
hasPermssion: 0,
credits: "tân",
description: "kawai",
commandCategory: "Không cần dấu lệnh",
usages: "noprefix",
cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
var { threadID, messageID } = event;
if (event.body.indexOf("Kawai")==0 || (event.body.indexOf("kawai")==0)) {
var msg = {
body: "oni-chan hentaiii",
attachment: fs.createReadStream(__dirname + `/noprefix/kawai.mp4`)
}
return api.sendMessage(msg, threadID, messageID);
}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

} 