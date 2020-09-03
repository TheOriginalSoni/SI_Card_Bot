var help = "List of commands: \
	\n -search [search words]\
	\n -power [card name] \
	\n -minor [card name] \
	\n -major [card name] \
	\n -unique [card name] \
	\n -event [event name] \
	\n -fear [fear name] \
	\n -faqs (search words) \
	\n -random [spirit/adversary]   \
	\n -spirit (front/back) [keywords] \
	\n -adversary (name)";

module.exports = {
	name: 'help',
	description: 'lists of commands',
	public: true,
	execute(msg, args) {
		msg.channel.send(help);
	},
};




