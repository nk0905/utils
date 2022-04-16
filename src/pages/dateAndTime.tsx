import React, { useEffect, useState } from 'react';
import { convertToString } from '../services/utils';
import { dateApi, getDB } from './api/getToday';

const DateAndTime: React.FC = () => {
  const [day, setDay] = useState<dateApi>({ today: '' });
  const today = convertToString(new Date());
  const dbToday = getDB();
  useEffect(() => {
    dbToday
      .then((data) => {
        setDay(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <p>今日の日付と今の時間</p>
      <p>
        {`${today.year}年${today.month}月${today.date}日(${today.dayname}) 
                ${today.hours}時${today.minutes}分${today.seconds}秒`}
      </p>
      <p>{day.today}</p>
    </div>
  );
};
export default DateAndTime;
