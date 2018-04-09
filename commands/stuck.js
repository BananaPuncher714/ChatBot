var Command = require("../command");

module.exports.stuck = new Command(
	function() {
		return {};
	},
	function(message, argument) {
		message.channel.send("Stuck in a block or area on MineZ? Request to be moved here: <https://shotbow.net/forum/threads/stuck-in-a-block-or-area.266338/>");
	}
);