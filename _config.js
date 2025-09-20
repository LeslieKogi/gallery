var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://lesliekogi_db_user:atlasb00k365pg@ipcluster.ekhlbgl.mongodb.net/darkroom?retryWrites=true&w=majority&appName=IPCluster',
    development: 'mongodb+srv://lesliekogi_db_user:atlasb00k365pg@ipcluster.ekhlbgl.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=IPCluster',
    test: 'mongodb+srv://lesliekogi_db_user:atlasb00k365pg@ipcluster.ekhlbgl.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=IPCluster',
}

module.exports = config;

