module.exports = {
    database: 'mongodb://localhost:27017/'
    , option : ''
    // database: 'mongodb://eranhd:<PASSWORD>@stduentmatch-shard-00-00-zg8px.mongodb.net:27017,stduentmatch-shard-00-01-zg8px.mongodb.net:27017,stduentmatch-shard-00-02-zg8px.mongodb.net:27017/'
    // , option : '?ssl=true&replicaSet=StduentMatch-shard-0&authSource=admin'
    

    /*
     db      - passed to the connection db instance
 server  - passed to the connection server instance(s)
 replset - passed to the connection ReplSet instance
 user    - username for authentication (if not specified in uri)
 pass    - password for authentication (if not specified in uri)
    */
    // connectoToSchool = (schoolId) => { return 'mongodb://localhost:27017/' + schoolId }
}
// module.exports = connectoToSchool = (schoolId) => { return 'mongodb://localhost:27017/' + schoolId }