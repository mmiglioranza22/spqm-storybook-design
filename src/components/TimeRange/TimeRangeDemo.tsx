// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { type DateOrString, ResponsiveTimeRange } from "@nivo/calendar";
import customStyle from "./TimeRange.module.css";

import exampleData from "./seed-data";
import RabbetBox from "../RabbetBox/RabbetBox";

type CalendarDemoProps = {
  variant: "dark" | "light";
  from: DateOrString;
  to: DateOrString;
  // spaceMonths: boolean;
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
    dayBorderColor: "transparent",
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
    dayBorderColor: "transparent",
    emptyColor: "var(--light-100)",
  },
};

const CalendarDemo = ({ variant, from, to }: CalendarDemoProps) => {
  return (
    <div
      style={{
        width: "800px",
        height: "400px",
      }}
    >
      <RabbetBox variant={variant} customStyle={customStyle}>
        <ResponsiveTimeRange
          data={exampleData}
          from={from}
          to={to}
          emptyColor={colorPallete[variant].emptyColor}
          colors={colorPallete[variant].colors}
          margin={{ top: 40, right: 40, bottom: 80, left: 40 }}
          dayBorderWidth={0}
          dayBorderColor={colorPallete[variant].dayBorderColor}
          daySpacing={4}
          weekdayTicks={[1, 3, 5]}
          dayRadius={9}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: "right-to-left",
              translateX: -60,
              translateY: -60,
              symbolSize: 20,
            },
          ]}
        />
      </RabbetBox>
    </div>
  );
};

export default CalendarDemo;
