// importing typeDefs and resolves to export for application
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
// exporting typedefs and resolvers as a single package
module.exports= { typeDefs, resolvers };