import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

const data = [
  {
    month: 'Jan',
    claims: 42,
  },
  {
    month: 'Feb',
    claims: 51,
  },
  {
    month: 'Mar',
    claims: 63,
  },
  {
    month: 'Apr',
    claims: 70,
  },
  {
    month: 'May',
    claims: 81,
  },
]

export function ClaimsChart() {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="claims" />
      </BarChart>
    </ResponsiveContainer>
  )
}