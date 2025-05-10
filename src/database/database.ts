import mongoose from "mongoose";

export const connectDb = (uri: string) => mongoose.connect(uri, { dbName: "sample_analytics" }).then((c) => {
      console.log(`${c.connection.name}is connected`);
   }).catch((e) => {
      console.log(e);
   })
