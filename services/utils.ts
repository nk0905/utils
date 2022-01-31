/**
 * 現在の日時を取得する
 * @param d Dateオブジェクトのインスタンス
 * @returns 年、月、日、曜日、時、分、秒、ミリ秒
 */
export const convertToString = (d: Date) => {
    const year = d.getFullYear(); // 年
    const month = d.getMonth() + 1; // 月は0~11の数値で返ってくるので+1する
    const date = d.getDate(); //日
    const day = d.getDay(); // 曜日の値を0~6の数値で返す。0が日曜日、1が月曜日、6が土曜日に相当。
    const dayArray = ['日','月','火','水','木','金','土'];
    const dayname = dayArray[day];
    const hours = d.getHours(); //時
    const minutes = d.getMinutes(); //分
    const seconds = d.getSeconds(); //秒
    const milliSeconds = d.getMilliseconds(); //ミリ秒
    return {year, month, date, dayname, hours, minutes, seconds, milliSeconds};
}