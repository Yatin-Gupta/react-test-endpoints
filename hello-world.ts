import { buildData } from "./functions";
import { _ } from "MyModule";

buildData("Here is sample data");

let ajay = { ..._ };
ajay.firstName = "Ajay";
ajay.lastName = "Kumar";

console.log(ajay);
