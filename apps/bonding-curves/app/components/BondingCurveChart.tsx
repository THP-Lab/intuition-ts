import { useEffect, useRef } from 'react'

import * as d3 from 'd3'

interface BondingCurvePoint {
  assets: number
  shares: number
}

interface BondingCurveChartProps {
  data: BondingCurvePoint[]
  width?: number
  height?: number
  margin?: { top: number; right: number; bottom: number; left: number }
}

export function BondingCurveChart({
  data,
  width = 600,
  height = 400,
  margin = { top: 20, right: 30, bottom: 30, left: 40 },
}: BondingCurveChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove()

    const svg = d3.select(svgRef.current)

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.assets) || 0])
      .range([margin.left, width - margin.right])

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.shares) || 0])
      .range([height - margin.bottom, margin.top])

    // Create line generator
    const line = d3
      .line<BondingCurvePoint>()
      .x((d) => xScale(d.assets))
      .y((d) => yScale(d.shares))
      .curve(d3.curveMonotoneX)

    // Add axes
    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .append('text')
      .attr('x', width - margin.right)
      .attr('y', -6)
      .attr('fill', 'currentColor')
      .attr('text-anchor', 'end')
      .text('Assets')

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale))
      .append('text')
      .attr('x', 6)
      .attr('y', margin.top)
      .attr('fill', 'currentColor')
      .attr('text-anchor', 'start')
      .text('Shares')

    // Add curve
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line)

    // Add grid lines
    svg
      .append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(
        d3
          .axisBottom(xScale)
          .tickSize(-(height - margin.top - margin.bottom))
          .tickFormat(() => ''),
      )

    svg
      .append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(${margin.left},0)`)
      .call(
        d3
          .axisLeft(yScale)
          .tickSize(-(width - margin.left - margin.right))
          .tickFormat(() => ''),
      )
  }, [data, width, height, margin])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className="w-full h-full"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  )
}
