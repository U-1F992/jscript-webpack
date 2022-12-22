import chalk from "chalk";
import { fuga, useJson } from "./lib";

const hogehoge = ["hoge", "fuga", "piyo"];
hogehoge.forEach(async value => await fuga(value));

WScript.Echo(chalk.red(useJson(hogehoge)));
