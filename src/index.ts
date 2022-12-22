import { fuga } from "./lib";

const hogehoge = ["hoge", "fuga", "piyo"];
hogehoge.forEach(value => fuga(value));

WScript.Echo(JSON.stringify(hogehoge));
