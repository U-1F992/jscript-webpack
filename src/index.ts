import { fuga } from "./lib";

(function main() {
    const hogehoge = ["ほげ", "ふが", "ぴよ"];
    hogehoge.forEach(value => fuga(value));
    WScript.Echo(JSON.stringify(hogehoge))
})();
