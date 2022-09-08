const { init } = require("../initdb");

class Footballer {
    constructor(data){
        this.id = data._id
        this.name = data.name;
        this.age = data.age;
        this.team = data.team;
    }

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                const dbData = await db.collection('footballers').find({}).toArray()
                console.log(dbData)
                const footballers = dbData.map(d => new Footballer(d))
                if (!footballers.length) { throw new Error('No footballers here!')}
                resolve(footballers);
            } catch (err) {
                reject(`Error retrieving footballers: ${err.message}`)
            }
        })
    }

    // static get random(){
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             const db = await init();
    //             const dbData = await db.collection('footballers').find({}).toArray()
    //             const index = Math.floor(Math.random()* dbData.length)
    //             const footballer = new Footballer(dbData[index])
    //             if (!footballer.length) { throw new Error('No footballers here!')}
    //             resolve(footballer);
    //         } catch (err) {
    //             reject(`Error retrieving footballers: ${err.message}`)
    //         }
    //     })
    // }

}



module.exports = Footballer;