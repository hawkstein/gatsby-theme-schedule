import React from "react"

const Logo: React.FC = () => {
  const side = 40
  const lines = []
  const colour = "#fff"
  const total = 4
  const cell = (side - 2) / total
  for (let i = 0; i <= total; i++) {
    lines.push({
      x1: 1 + i * cell,
      y1: 0,
      x2: 1 + i * cell,
      y2: side,
      stroke: colour,
      strokeWidth: 1.5,
    })
    lines.push({
      x1: 0,
      y1: 1 + i * cell,
      x2: side,
      y2: 1 + i * cell,
      stroke: colour,
      strokeWidth: 1.5,
    })
  }

  return (
    <svg
      viewBox={`0 0 ${side} ${side}`}
      width={side}
      height={side}
      xmlns="http://www.w3.org/2000/svg"
    >
      {lines.map((line) => (
        <line key={`${line.x1}-${line.y1}-${line.x2}-${line.y2}`} {...line} />
      ))}
    </svg>
  )
}

export default Logo
