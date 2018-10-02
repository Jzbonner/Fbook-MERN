const secrets = {
    dbUri: 'mongodb://jzbonner:Jarrett16@ds119853.mlab.com:19853/fbook-mern', 
}

export const getSecret = key => secrets[key]; 
