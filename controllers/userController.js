const { client } = require("../Common/cockroachDb");

const createTableFunc = async (client) => {
    try {
        const createTableQuery =`CREATE TABLE IF NOT EXISTS usertable (
            userid SERIAL PRIMARY KEY,
            username VARCHAR(80),
            phone VARCHAR(20),
            address VARCHAR(255)
        );`;
        await client.query(createTableQuery);
        return {
            status: true,
        }
    } catch (error) {
        console.log(`[Error] Error Occured while creating the table`)
        console.log(error);
        return {
            status: false,
            message: error,
        }
    }
}

exports.addUser =  async (addUserRequest,addUserResponse) => {
    await client.connect();
    try {
        let createRes = await createTableFunc(client);
        if(!createRes.status){
            return addUserResponse.status(500).send({
                "message": createRes.message
            });
        }
        
        let selectTable = `SELECT table_name
        FROM information_schema.tables
        WHERE table_name = 'usertable';`;
        const results = await client.query(selectTable);
        // validate the table
        if(!results.rowCount > 0 ){
            return addUserResponse.status(500).send({
                "message": "Table did not created"
            });
        }
        console.log("Table has been created successfully");
        let username = 'sangar';
        let phone = '123456789';
        let address = 'chennai';
        const insertQuery = `
        INSERT INTO usertable (username, phone, address)
        VALUES ('${username}', '${phone}', '${address}')
        RETURNING userid;
        `;
        console.log(insertQuery);
        const insertResult = await client.query(insertQuery);
        if(!insertResult.rowCount > 0 ){
            return addUserResponse.status(500).send({
                "message": "user has not been created"
            });
        }
        
        addUserResponse.status(200).send({
            "userId": insertResult.rows[0].userid,
            "message":"Cockroach survives everywhere"
        });
    } catch (err) {
        console.log("error executing query:", err);
        return addUserResponse.status(500).send({
            "message": "Error Occured"
        });
    } finally {
        client.end();
    }
}