
const voting = {
    pepperoni: 0,
    cheese: 0,
    hawaiian: 0,
}

class Gift_exchange {
    static async tallyVotes() {
        // handling calculating the final results for our poll
        // and return those results
        return voting;
    }

    static async recordVote(pizzaName) {
        // increments the pizza name that was voted for
        // and return the final results
        if (voting[pizzaName] || voting[pizzaName] == 0) {
            voting[pizzaName] += 1;
        }

        return Gift_exchange.tallyVotes()
    }
}

module.exports = Gift_exchange