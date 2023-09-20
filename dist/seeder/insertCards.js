import { insertMany } from "./seedCards.js";
switch (process.argv[2]) {
    case "--import":
        insertMany();
        break;
}
