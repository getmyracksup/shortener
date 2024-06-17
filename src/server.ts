import application from "./app";
import Mongo from "./repositories/mongo/mongo";

application.listen(3000);
Mongo.initDbConnection()