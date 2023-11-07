import { createContext, useState, useContext } from 'react';

export const WeekDayContext = createContext();

export function WeekDayContextProvider({ children }) {
  const [weekDayContext, setWeekDayContext] = useState('Segunda-Feira');

  return (
    <WeekDayContext.Provider value={{ weekDayContext, setWeekDayContext }}>
      {children}
    </WeekDayContext.Provider>
  );
}

export function useWeekDay() {
  const context = useContext(WeekDayContext);

  if (!context) {
    throw new Error(
      'useWeekDay must be used within a WeekDayContextProvider.'
    );
  }

  const { weekDayContext, setWeekDayContext } = context;
  return { weekDayContext, setWeekDayContext };
}