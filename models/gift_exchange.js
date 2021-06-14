
const clients = {
    
}

class GiftExchange {
    static async pairs(users) {
        // handling the randoming pairing of a 
        // submitted list of users
        const randomPairs = [];

        //randomly sort users
        for (let i = users.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = users[i]
            users[i] = users[j]
            users[j] = k
        }
        
        //build array of arrays
        const len = users.length/2
        for (let i = 0; i < len; i++) {
            const x = users.pop();
            const y = users.pop();
            const builderArr = [x, y];
            randomPairs.push(builderArr);
        }

        return randomPairs;
    }

    static async traditional(pairList) {
        // returns an array of strings that read who gives gifts to whom
        const giftList = [];
        //build return array
        let j = 0;
        let x = 0;
        let y = 0;
        const len = pairList.length*2;
        for (let i = 0; i < len; i++) {
            if (i == 0) {
                x = pairList[i][0];
                y = pairList[i][1];
            } else if (i == len-1 ) {
                x = y;
                y = pairList[0][0];
            } else if (i%2 == 0) {
                x = y;
                y = pairList[j][1];
            } else {
                j++;
                x = y;
                y = pairList[j][0];
            }
            const builder = x + ' is giving a gift to ' + y;
            giftList.push(builder);
        }

        return giftList;
    }
}

module.exports = GiftExchange