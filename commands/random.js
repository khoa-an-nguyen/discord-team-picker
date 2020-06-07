const {valorantMaps} = require('../constants/valorantMaps');
const testmembers = require('../resources/testmembers');

module.exports = {
    name: 'random',
    description: 'Team randomizer.',
    execute(msg, args) {
        const channel = msg.guild.channels.cache.find(channel => channel.name === `${args}`);

        // once get the voice channel then get all the users names
        const members = channel.members; // map object of all the members in a channel

        // TODO: Set up tests later
        // For testing
        // const testMembers = {...testmembers};
        // const members = testMembers.testMembers;
        // console.log(members);

        // Set teams collections
        const teams = new Map();
        teams.set(0, []);
        teams.set(1, []);
        const TOTAL_MEMBERS = members.size;

        if (TOTAL_MEMBERS) {
            if ((TOTAL_MEMBERS % 2) !== 0) {
                msg.channel.send("Hmm teams seem to be uneven... 🤔");
                return;
            }
            // go through members collection and remove out / add name to random array
            for (let i = 0; i < TOTAL_MEMBERS; i++) {
                let randomMember = getRandomKey(members);
                // set the name to the team map
                if (teams.get(0).length >= 5) {
                    teams.get(1).push(members.get(randomMember).user.username);
                } else {
                    teams.get(0).push(members.get(randomMember).user.username);
                }
                // remove it from the members map
                members.delete(randomMember);
            }
            teamPrinter(teams);
        } else {
            msg.channel.send("Nobody is in that channel!");
        }

        /**
         * Random a collection of objects by size to obtain the key.
         * @param {*} collection 
         */
        function getRandomKey(collection) {
            let index = Math.floor(Math.random() * collection.size);
            let count = 0;
            for (let key of collection.keys()) {
                if (count++ === index) {
                    return key;
                }
            }
        }

        /**
         * Prints to discord chat the randomized teams
         * @param {*} teamCollection 
         */
        function teamPrinter(teamCollection) {
            let teamPrinter = "```css\n";
            teamPrinter += `[Attackers]\n\n`;
            
            for (let member of teamCollection.get(0)) {
                teamPrinter += `${member}\n`
            }
            teamPrinter += "```";
            teamPrinter += "```ini\n";
            teamPrinter += "[Defenders]\n\n";
            for (let member of teamCollection.get(1)) {
                teamPrinter += `${member}\n`
            }
            teamPrinter += "```";
            const map = valorantMaps[Math.floor(Math.random() * valorantMaps.length)];
            teamPrinter += `\n\`Map: ${map}\``;
            msg.channel.send(teamPrinter);
        }
    }
}