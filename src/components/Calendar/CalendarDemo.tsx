// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { type DateOrString, ResponsiveCalendar } from "@nivo/calendar";
import customStyle from "./Calendar.module.css";

import exampleData from "./seed-data";
import RabbetBox from "../RabbetBox/RabbetBox";

type CalendarDemoProps = {
  variant: "dark" | "light";
  from: DateOrString;
  to: DateOrString;
  spaceMonths: boolean;
};

const colorPallete = {
  dark: {
    colors: [
      "var(--success-400)",
      "var(--success-600)",
      "var(--success-800)",
      "var(--success-900)",
    ],
    monthBorderColor: "var(--dark-500)",
    dayBorderColor: "rgba(255,255,255,0.4)",
    emptyColor: "var(--dark-950)",
  },
  light: {
    colors: [
      "var(--success-400)",
      "var(--success-600)",
      "var(--success-800)",
      "var(--success-900)",
    ],
    monthBorderColor: "var(--light-300)",
    dayBorderColor: {},
    emptyColor: "var(--light-100)",
  },
};

const CalendarDemo = ({
  variant,
  from,
  to,
  spaceMonths,
}: CalendarDemoProps) => {
  return (
    <div
      style={{
        width: "800px",
        height: "600px",
        // backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <RabbetBox variant={variant} customStyle={customStyle}>
        <ResponsiveCalendar
          data={exampleData}
          from={from}
          to={to}
          emptyColor={colorPallete[variant].emptyColor}
          colors={colorPallete[variant].colors}
          margin={{ top: 10, right: 30, bottom: 10, left: 30 }}
          yearSpacing={40}
          monthBorderColor={colorPallete[variant].monthBorderColor}
          dayBorderColor={colorPallete[variant].dayBorderColor}
          monthBorderWidth={2}
          dayBorderWidth={0}
          monthSpacing={spaceMonths ? 15 : 0}
          daySpacing={2}
          legends={[
            {
              anchor: "bottom-right",
              direction: "row",
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: "right-to-left",
              itemTextColor: "red !important",
            },
          ]}
        />
      </RabbetBox>
    </div>
  );
};

export default CalendarDemo;
