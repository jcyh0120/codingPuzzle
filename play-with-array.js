/*   Javascript 常用的陣列方法   */

/* ----- map --------- */

var 陣列 = ["蛇", "蛋", "肅", "夫", "莽"];

// pass a function to map
const 輸出陣列 = 陣列.map(內容 => "魯" + 內容);

console.log(輸出陣列);
// 預期結果: [ '魯蛇', '魯蛋', '魯肅', '魯夫', '魯莽' ]​​​​​

/* ----- forEach ----- */

var 日常生活 = ["賴床", "打卡上班", "煩惱午餐", "揪下午茶", "不敢下班", "回家睡覺"];

日常生活.forEach(function(任務) {
  開始執行(任務);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"

/* ----- filter ----- */

var 男性追求者身高 = [170, 176, 181, 187, 168, 177, 183];

const 有機會的追求者身高 = 男性追求者身高.filter(身高 => 身高 > 180);

console.log(有機會的追求者身高);
// expected output: Array ["exuberant", "destruction", "present"]

/* ----- slice ----- */

var 班兵 = ["班頭","班二","班三","班四","班五","班六","班七","班八","班九","班十"];

var 搬器材人員 = 班兵.slice(0,5); //?

var 出公差人員 = 班兵.slice(6); //?

var 站哨人員 = 班兵.slice(-2); //?

var 榮譽假人員 = 班兵.slice(5,-2); //?
// expected output: Array ["camel", "duck", "elephant"]

/* ----- reduce ----- */

const array2 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array2.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array2.reduce(reducer, 5));
// expected output: 15

function 開始執行(事情) {
  console.log(事情);
}
