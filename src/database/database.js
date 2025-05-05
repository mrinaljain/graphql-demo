import mongoose from "mongoose";

export const connectDb = (uri) => mongoose.connect(uri, { dbName: "sample_analytics" }).then((c) => {
      console.log(c.connection.name);
   }).catch((e) => {
      console.log(e);
   })
