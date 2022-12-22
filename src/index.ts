import { fuga } from "./lib";

const hogehoge = ["hoge", "fuga", "piyo"];
hogehoge.forEach(async value => await fuga(value));

WScript.Echo(JSON.stringify(hogehoge));
