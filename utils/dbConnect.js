const { connect } = require('mongoose');


exports.dbConnect = () => {

    main().then(() => console.log(`[-] ${process.env.MONGO_URL} Database Connected`)).catch((e) => console.log(e));


    async function main() {
        await connect(process.env.MONGO_URL)
    }

} 