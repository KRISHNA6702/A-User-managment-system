import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import UserModel from "./models/user.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/create",  async (req, res) => {
    let { name, email, image} = req.body;

    let createdUser = await UserModel.create({
        name,
        email,
        image
    })
    res.redirect(createdUser)
    
});


app.get("/read", async (req, res) => {
    const users = await UserModel.find();
    console.log(users.length);
    res.render("read", { users });
});

app.get("/delete/:id", async (req, res) => {
    await UserModel.findOneAndDelete({ _id: req.params.id });
    const users = await UserModel.find();
    res.render("read", { users });
});


app.listen(3000, () => {
    console.log("server is running on port 3000");
});
