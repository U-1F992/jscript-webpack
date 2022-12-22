import { fuga } from "./lib";
import * as JSON5 from "json5";

const hogehoge = ["hoge", "fuga", "piyo"];
hogehoge.forEach(value => fuga(value));

WScript.Echo(JSON5.stringify(hogehoge));
