const bubbles = [
  { left: '5%', size: 18, duration: 14, delay: -2, drift: -24 },
  { left: '12%', size: 26, duration: 18, delay: -8, drift: 20 },
  { left: '20%', size: 14, duration: 12, delay: -4, drift: 14 },
  { left: '28%', size: 30, duration: 20, delay: -1, drift: -18 },
  { left: '36%', size: 16, duration: 13, delay: -6, drift: 16 },
  { left: '44%', size: 24, duration: 17, delay: -10, drift: -22 },
  { left: '52%', size: 12, duration: 11, delay: -5, drift: 10 },
  { left: '60%', size: 28, duration: 19, delay: -9, drift: 18 },
  { left: '68%', size: 20, duration: 15, delay: -3, drift: -15 },
  { left: '76%', size: 34, duration: 22, delay: -11, drift: 24 },
  { left: '84%', size: 15, duration: 12, delay: -7, drift: -10 },
  { left: '92%', size: 22, duration: 16, delay: -12, drift: 12 },
]

export default function BubbleLayer() {
  return (
    <div className="bubble-layer" aria-hidden="true">
      {bubbles.map((bubble, index) => (
        <span
          key={`${bubble.left}-${index}`}
          className="bubble"
          style={{
            left: bubble.left,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            '--bubble-duration': `${bubble.duration}s`,
            '--bubble-delay': `${bubble.delay}s`,
            '--bubble-drift': `${bubble.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
