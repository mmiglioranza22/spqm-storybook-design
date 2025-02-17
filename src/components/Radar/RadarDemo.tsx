import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Label,
  Legend,
  Tooltip,
  XAxis,
  Dot,
} from "recharts";
import "./Radar.css";
import RabbetBox from "../RabbetBox/RabbetBox";

const data = [
  {
    skill: "Diligence",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    skill: "Insight",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    skill: "Support",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    skill: "Competence",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    skill: "Speed",
    A: 85,
    B: 90,
    fullMark: 150,
  },
];

type RadarDemoProps = {
  variant: "dark" | "light";
};

const RadarDemo = ({ variant }: RadarDemoProps) => {
  const color = variant === "light" ? "var(--light-900)" : "currentColor";
  return (
    <div
      style={{
        width: "600px",
        height: "400px",
      }}
    >
      <RabbetBox variant={variant}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid
              stroke={color}
              className="polar-grid"
              gridType="circle"
              // radialLines={false}
              strokeWidth={1.5}
              strokeDasharray="15"
            />
            <PolarAngleAxis dataKey="skill" stroke="currentColor" />
            <PolarRadiusAxis
              angle={270}
              orientation="middle"
              transform=""
              stroke={
                variant === "light" ? "var(--light-950)" : "var(--dark-50)"
              }
              className="radius-axis"
            />
            <Tooltip
              wrapperClassName="tooltip"
              cursor={{ stroke: "red", strokeWidth: 2 }}
            />
            {/* <Legend /> */}

            <Radar
              className="radar"
              name="Score"
              dataKey="A"
              stroke={color}
              // fill={"red"}
              strokeWidth={4}
              fill="currentColor"
              fillOpacity={0.4}
              // dot={<Dot stroke={"currentColor"} />}
            />
          </RadarChart>
        </ResponsiveContainer>
      </RabbetBox>
    </div>
  );
};

export default RadarDemo;
