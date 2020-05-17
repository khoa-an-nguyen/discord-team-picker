module.exports = {
    name: 'random',
    description: 'Team randomizer.',
    execute(msg, args) {
        // msg.channel.send('randomizer');

        // from the message get the voice channel - maybe from the args?
        const channel = msg.guild.channels.cache.find(channel => channel.name === "Valorant");

        // once get the voice channel then get all the users names
        const testArray = [{
            user: {
                id: '112384709719257080',
                bot: false,
                username: 'khoality1',
                discriminator: '1230',
                avatar: 'acb9138953a9d2daa7f1818cc0b50729',
                lastMessageID: '711680595419332668',
                lastMessageChannelID: '697159904208748728',
            },
            joinedTimestamp: 1586286273719,
            lastMessageID: '711680595419332668',
            lastMessageChannelID: '697159904208748728',
        },
        {
            user: {
                id: '112384709719257081',
                bot: false,
                username: 'khoality2',
                discriminator: '1230',
                avatar: 'acb9138953a9d2daa7f1818cc0b50729',
                lastMessageID: '711680595419332668',
                lastMessageChannelID: '697159904208748728',
            },
            joinedTimestamp: 1586286273719,
            lastMessageID: '711680595419332668',
            lastMessageChannelID: '697159904208748728',
        },
        {
            user: {
                id: '112384709719257082',
                bot: false,
                username: 'khoality3',
                discriminator: '1230',
                avatar: 'acb9138953a9d2daa7f1818cc0b50729',
                lastMessageID: '711680595419332668',
                lastMessageChannelID: '697159904208748728',
            },
            joinedTimestamp: 1586286273719,
            lastMessageID: '711680595419332668',
            lastMessageChannelID: '697159904208748728',
        },
        {
            user: {
                id: '112384709719257083',
                bot: false,
                username: 'khoality4',
                discriminator: '1230',
                avatar: 'acb9138953a9d2daa7f1818cc0b50729',
                lastMessageID: '711680595419332668',
                lastMessageChannelID: '697159904208748728',
            },
            joinedTimestamp: 1586286273719,
            lastMessageID: '711680595419332668',
            lastMessageChannelID: '697159904208748728',
        },
        {
            user: {
                id: '112384709719257084',
                bot: false,
                username: 'khoality5',
                discriminator: '1230',
                avatar: 'acb9138953a9d2daa7f1818cc0b50729',
                lastMessageID: '711680595419332668',
                lastMessageChannelID: '697159904208748728',
            },
            joinedTimestamp: 1586286273719,
            lastMessageID: '711680595419332668',
            lastMessageChannelID: '697159904208748728',
        },
        {
            user: {
                id: '112384709719257085',
                bot: false,
                username: 'khoality6',
                discriminator: '1230',
                avatar: 'acb9138953a9d2daa7f1818cc0b50729',
                lastMessageID: '711680595419332668',
                lastMessageChannelID: '697159904208748728',
            },
            joinedTimestamp: 1586286273719,
            lastMessageID: '711680595419332668',
            lastMessageChannelID: '697159904208748728',
        },
        {
            user: {
                id: '112384709719257086',
                bot: false,
                username: 'khoality7',
                discriminator: '1230',
                avatar: 'acb9138953a9d2daa7f1818cc0b50729',
                lastMessageID: '711680595419332668',
                lastMessageChannelID: '697159904208748728',
            },
            joinedTimestamp: 1586286273719,
            lastMessageID: '711680595419332668',
            lastMessageChannelID: '697159904208748728',
        },
        {
            user: {
                id: '112384709719257087',
                bot: false,
                username: 'khoality8',
                discriminator: '1230',
                avatar: 'acb9138953a9d2daa7f1818cc0b50729',
                lastMessageID: '711680595419332668',
                lastMessageChannelID: '697159904208748728',
            },
            joinedTimestamp: 1586286273719,
            lastMessageID: '711680595419332668',
            lastMessageChannelID: '697159904208748728',
        },
        {
            user: {
                id: '112384709719257088',
                bot: false,
                username: 'khoality9',
                discriminator: '1230',
                avatar: 'acb9138953a9d2daa7f1818cc0b50729',
                lastMessageID: '711680595419332668',
                lastMessageChannelID: '697159904208748728',
            },
            joinedTimestamp: 1586286273719,
            lastMessageID: '711680595419332668',
            lastMessageChannelID: '697159904208748728',
        },
        {
            user: {
                id: '112384709719257089',
                bot: false,
                username: 'khoality10',
                discriminator: '1230',
                avatar: 'acb9138953a9d2daa7f1818cc0b50729',
                lastMessageID: '711680595419332668',
                lastMessageChannelID: '697159904208748728',
            },
            joinedTimestamp: 1586286273719,
            lastMessageID: '711680595419332668',
            lastMessageChannelID: '697159904208748728',
        }];
        // const members = channel.members; // map object of all the members in a channel
        const members = new Map();
        for (let i of testArray) {
            members.set(i.user.id, i);
        }

        // Set teams collections
        const teams = new Map();
        teams.set(0, []);
        teams.set(1, []);

        // go through members collection and remove out / add name to random array
        const TOTAL_MEMBERS = members.size;

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
         * Temporary function for team print out for now. could use a bit of work 😬
         * @param {*} teamCollection 
         */
        function teamPrinter(teamCollection) {
            let teamPrinter = ``;
            teamPrinter += `+====TEAM 1====+\n\n`;
            for (let member of teamCollection.get(0)) {
                teamPrinter += `${member}\n`
            }
            teamPrinter += "\n+====TEAM 2====+\n\n";
            for (let member of teamCollection.get(1)) {
                teamPrinter += `${member}\n`
            }
            teamPrinter += "\nGL HF! 😁";
            msg.channel.send(teamPrinter);
        }
    }
}