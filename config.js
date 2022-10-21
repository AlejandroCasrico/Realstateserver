const  configuration = {
    mongodb: {
        url:process.env.DB_URL || "mongodb+srv://Alexcas01:alexcas01@clusterabc.vac34vy.mongodb.net/?retryWrites=true&w=majority"
      
    }
}
module.exports={
    configuration
}