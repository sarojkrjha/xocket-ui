import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

const data = [
  { month: 'Jan', rate: 89 },
  { month: 'Feb', rate: 91 },
  { month: 'Mar', rate: 93 },
  { month: 'Apr', rate: 95 },
  { month: 'May', rate: 96 },
]

export function MatchRateChart() {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="rate"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}