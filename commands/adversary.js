const adversary = require ('./AdversaryNames.js').adversary;

module.exports = {
	name: 'adversary',
	description: 'Get an adversaries',
	public: true,
	async execute(msg, args) {
        console.log(adversary.length);
        var panel = "";
        if (!Array.isArray(args[0]) || args.length == 0){
             panel = "Adversaries are \n Prussia, Engalnd, France, Habsburg, Russia, Scotland, Sweeden";
        }
        var found = false;
        var list = [];

        for(const ad of adversary){
            //  list.concat(ad.name);
            //cardSearch.getcardname(args[0], list);
            if(!found && ad.title == args.toLowerCase()){
                panel = adversary[n].panel;
                found = true;
            }
        }
        msg.channel.send(panel);
    }};