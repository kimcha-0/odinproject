function createUser (name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return { name, discordName, getReputation, giveReputation }
}

const createPlayer = (name, level) => {
    const { getReputation, giveReputation } = createUser(name);

    const increaseLevel = () => level++;
    return { name, getReputation, giveReputation, increaseLevel };
};

const josh = createUser("josh");
const playerJosh = createPlayer("josh", 1);
josh.giveReputation();
josh.giveReputation();

console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
});
