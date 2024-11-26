'use client'

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

interface Point {
  x: number
  y: number
}

interface LineChartProps {
  data: Point[]
  xLabel?: string
  yLabel?: string
  title?: string
}

export function LineChart({
  data,
  xLabel = 'X',
  yLabel = 'Y',
  title,
}: LineChartProps) {
  const formattedData = data.map((point) => ({
    name: point.x.toString(),
    value: point.y,
  }))

  return (
    <div className="w-full h-full">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={formattedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="name"
            label={{ value: xLabel, position: 'insideBottom', offset: -5 }}
            className="text-sm fill-muted-foreground"
          />
          <YAxis
            label={{
              value: yLabel,
              angle: -90,
              position: 'insideLeft',
              offset: 10,
            }}
            className="text-sm fill-muted-foreground"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--background))',
              border: '1px solid hsl(var(--border))',
              borderRadius: 'var(--radius)',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            name="Value"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={false}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}
