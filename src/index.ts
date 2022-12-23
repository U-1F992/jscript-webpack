// import chalk from "chalk";
import "./window";
import { fuga, useJson } from "./lib";

const hogehoge = ["hoge", "fuga", "piyo"];
hogehoge.forEach(async value => await fuga(value));

// WScript.Echo(chalk.red(useJson(hogehoge)));
WScript.Echo(useJson(hogehoge));

let id = setTimeout(() => WScript.Echo(`running on ${id}`), 1000);
WScript.Echo("sleeping");
WScript.Sleep(2000);

id = setInterval(arg => WScript.Echo(`arg: ${arg}`), 100, "hoge");  // expected "hoge", but "undefined"
WScript.Sleep(1000);
