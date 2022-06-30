import RemoteSQLiteDatabase from './database/RemoteSQLiteDatabase.js';

async function init() {
    console.log("### Starting WebTech-App ###"); // eslint-disable-line no-console
    testDatabaseConnection();
}

// Test database connection
async function testDatabaseConnection() {
    let query, response, db;
    // Create remote database connection
    db = new RemoteSQLiteDatabase();
    db.connect();

    // Request all entries from table
    query = "SELECT * from team";
    response = await db.runQuery(query);
    console.log(`Result for "${query}"`); // eslint-disable-line no-console
    console.log(response.resultSet); // eslint-disable-line no-console

    // Insert entry into table
    query = "INSERT INTO team (Nr, Name, Tore, Einsätze, Debüt, Position, Verein) VALUES (\"1337\", \"New Player\", 42, 1337, 2022, \"Mittelfeld und Angriff\", \"Eintracht Frankfurt\")";
    response = await db.runQuery(query);
    console.log(`Result for "${query}"`);// eslint-disable-line no-console
    console.log(response.resultSet); // eslint-disable-line no-console

    // Request specific entries from table  (check if insert operation was successful)
    query = "SELECT * FROM team WHERE Name = \"New Player\"";
    response = await db.runQuery(query);
    console.log(`Result for "${query}"`);// eslint-disable-line no-console
    console.log(response.resultSet); // eslint-disable-line no-console

    // Update entry in table
    query = "UPDATE team SET Tore = 100 WHERE Name = \"New Player\"";
    response = await db.runQuery(query);
    console.log(`Result for "${query}"`);// eslint-disable-line no-console
    console.log(response.resultSet); // eslint-disable-line no-console

    // Request specific entries from table (check if update operation was successful)
    query = "SELECT * FROM team WHERE Name = \"New Player\"";
    response = await db.runQuery(query);
    console.log(`Result for "${query}"`);// eslint-disable-line no-console
    console.log(response.resultSet); // eslint-disable-line no-console

    // Delete entry from table
    query = "DELETE FROM team WHERE Name = \"New Player\"";
    response = await db.runQuery(query);
    console.log(`Result for "${query}"`);// eslint-disable-line no-console
    console.log(response.resultSet); // eslint-disable-line no-console

    // Request specific entries from table  (check if delete operation was successful)
    query = "SELECT * FROM team WHERE Name = \"New Player\"";
    response = await db.runQuery(query);
    console.log(`Result for "${query}"`);// eslint-disable-line no-console
    console.log(response.resultSet); // eslint-disable-line no-console
}

init();