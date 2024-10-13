const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  const connectionURL = "mongodb+srv://job:job@cluster0.jglfx.mongodb.net/";


  mongoose
    .connect(connectionURL)
    .then(() => console.log("jon board database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
