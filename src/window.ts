globalThis["document"] = WScript.CreateObject("htmlfile");
globalThis.window = (document as Document & { parentWindow: typeof window }).parentWindow;

[
    "setTimeout",
    "clearTimeout",
    "setInterval",
    "clearInterval",
    "setImmediate",
    "clearImmediate",
].forEach(method => {
    globalThis[method] = function () {
        let [callback, ms, ...rest] = Array.from(arguments);
        if (callback instanceof Function) {
            callback = callback.bind(undefined, ...rest);
            return window[method](callback, ms);
        } else {
            return window[method](callback, ms, rest[0], rest[1], rest[2], rest[3], rest[4], rest[5], rest[6], rest[7], rest[8], rest[9], rest[10], rest[11], rest[12], rest[13], rest[14], rest[15], rest[16], rest[17], rest[18], rest[19], rest[20], rest[21], rest[22], rest[23], rest[24], rest[25], rest[26], rest[27], rest[28], rest[29], rest[30], rest[31], rest[32], rest[33], rest[34], rest[35], rest[36], rest[37], rest[38], rest[39], rest[40], rest[41], rest[42], rest[43], rest[44], rest[45], rest[46], rest[47], rest[48], rest[49], rest[50], rest[51], rest[52], rest[53], rest[54], rest[55], rest[56], rest[57], rest[58], rest[59], rest[60], rest[61], rest[62], rest[63], rest[64], rest[65], rest[66], rest[67], rest[68], rest[69], rest[70], rest[71], rest[72], rest[73], rest[74], rest[75], rest[76], rest[77], rest[78], rest[79], rest[80], rest[81], rest[82], rest[83], rest[84], rest[85], rest[86], rest[87], rest[88], rest[89], rest[90], rest[91], rest[92], rest[93], rest[94], rest[95], rest[96], rest[97], rest[98], rest[99], rest[100], rest[101], rest[102], rest[103], rest[104], rest[105], rest[106], rest[107], rest[108], rest[109], rest[110], rest[111], rest[112], rest[113], rest[114], rest[115], rest[116], rest[117], rest[118], rest[119], rest[120], rest[121], rest[122], rest[123], rest[124], rest[125], rest[126], rest[127], rest[128], rest[129], rest[130], rest[131], rest[132], rest[133], rest[134], rest[135], rest[136], rest[137], rest[138], rest[139], rest[140], rest[141], rest[142], rest[143], rest[144], rest[145], rest[146], rest[147], rest[148], rest[149], rest[150], rest[151], rest[152], rest[153], rest[154], rest[155], rest[156], rest[157], rest[158], rest[159], rest[160], rest[161], rest[162], rest[163], rest[164], rest[165], rest[166], rest[167], rest[168], rest[169], rest[170], rest[171], rest[172], rest[173], rest[174], rest[175], rest[176], rest[177], rest[178], rest[179], rest[180], rest[181], rest[182], rest[183], rest[184], rest[185], rest[186], rest[187], rest[188], rest[189], rest[190], rest[191], rest[192], rest[193], rest[194], rest[195], rest[196], rest[197], rest[198], rest[199], rest[200], rest[201], rest[202], rest[203], rest[204], rest[205], rest[206], rest[207], rest[208], rest[209], rest[210], rest[211], rest[212], rest[213], rest[214], rest[215], rest[216], rest[217], rest[218], rest[219], rest[220], rest[221], rest[222], rest[223], rest[224], rest[225], rest[226], rest[227], rest[228], rest[229], rest[230], rest[231], rest[232], rest[233], rest[234], rest[235], rest[236], rest[237], rest[238], rest[239], rest[240], rest[241], rest[242], rest[243], rest[244], rest[245], rest[246], rest[247], rest[248], rest[249], rest[250], rest[251], rest[252], rest[253], rest[254], rest[255]);
        }
    };
});

// https://stackoverflow.com/questions/12404528/ie-parameters-get-undefined-when-using-them-in-settimeout

// タイマーメソッド群はコールバックへの引数を実装していないようです。Function.prototype.bindを使用して、引数を再現します。
// babelはスプレッド構文をFunction.prototype.applyで再生成しようと試みますが、COMオブジェクトであるhtmlfileのメソッドにはapplyは備わっていないため、当面はarguments[2+255]までを手作業で列挙しています。
// また、bindもCOMオブジェクト由来のメソッドには含まれないはずです。instanceofでFunction.prototype.bindの有無をゆるく確認します。
// なおこのbindを使用しない場合には、念のため列挙はしていますが、コールバック関数に引数を渡すのは絶望的です。
