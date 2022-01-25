import React from "react";
import { convertToString } from '../utils/dateAndTime';

const dateAndTime: React.FC = ({}) => {
    const today = convertToString(new Date);
    return (
        <div>
            <p>今日の日付と今の時間</p>
            <p>
                {`${today.year}年${today.month}月${today.date}日(${today.dayname}) 
                ${today.hours}時${today.minutes}分${today.seconds}秒`}</p>
        </div>
    )
}
export default dateAndTime;