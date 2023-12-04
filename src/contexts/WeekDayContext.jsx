import { createContext, useState, useContext } from "react";
import { WeekDays } from "../utils/WeekDays";

export const WeekDayContext = createContext();

export function WeekDayContextProvider({ children }) {
  const [weekDayContext, setWeekDayContext] = useState(
    WeekDays[new Date().getDay()]
  );

  return (
    <WeekDayContext.Provider value={{ weekDayContext, setWeekDayContext }}>
      {children}
    </WeekDayContext.Provider>
  );
}

export function useWeekDay() {
  const context = useContext(WeekDayContext);

  if (!context) {
    throw new Error("useWeekDay must be used within a WeekDayContextProvider.");
  }

  const { weekDayContext, setWeekDayContext } = context;
  return { weekDayContext, setWeekDayContext };
}
