const { ObjectId } = require('mongodb');
var config = require("./../../config/setting.json");
class UserService{
    databaseConnection = require('./../database/database');
    user = require('./../models/user');

    client;
    userDatabase;
    userCollection;
    constructor(){
        this.client = this.databaseConnection.getMongoClient();
        this.userDatabase =  this.client.db(config.mongodb.database);
        this.userCollection = this.userDatabase.collection("admin");
    }
    async getAdmin(){
        return await this.userCollection.find().toArray();
    }
  
}
module.exports = UserService;
