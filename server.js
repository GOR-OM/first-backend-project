import  {app} from "./app.js";
import  {connectDB } from "./data/daatabase.js";

connectDB();

app.listen(process.env.PORT, () => {
    console.log("Server is working");
});
