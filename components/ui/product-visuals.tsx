"use client"

// Mini chart line component for analytics visualization
export function MiniLineChart({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 40" 
      className={`w-full h-full ${className}`}
      fill="none"
    >
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Area fill */}
      <path
        d="M0 35 L10 30 L25 32 L40 22 L55 25 L70 15 L85 18 L100 8 L100 40 L0 40 Z"
        fill="url(#chartGradient)"
      />
      {/* Line */}
      <path
        d="M0 35 L10 30 L25 32 L40 22 L55 25 L70 15 L85 18 L100 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* End dot */}
      <circle cx="100" cy="8" r="3" fill="currentColor" />
    </svg>
  )
}

// Mini bar chart component
export function MiniBarChart({ className = "" }: { className?: string }) {
  const bars = [40, 65, 45, 80, 55, 90, 70]
  return (
    <svg 
      viewBox="0 0 70 40" 
      className={`w-full h-full ${className}`}
      fill="none"
    >
      {bars.map((height, i) => (
        <rect
          key={i}
          x={i * 10 + 1}
          y={40 - (height * 0.4)}
          width="8"
          height={height * 0.4}
          rx="1"
          fill="currentColor"
          opacity={0.2 + (i * 0.1)}
        />
      ))}
    </svg>
  )
}

// Performance metric card
export function MetricCard({ 
  label, 
  value, 
  trend, 
  className = "" 
}: { 
  label: string
  value: string
  trend?: string
  className?: string 
}) {
  return (
    <div className={`p-3 rounded-lg bg-card border border-border ${className}`}>
      <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-semibold text-foreground">{value}</span>
        {trend && (
          <span className="text-[10px] text-accent font-medium">{trend}</span>
        )}
      </div>
    </div>
  )
}

// Hero landing page performance mockup
export function HeroDashboardMockup() {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16 lg:mt-24">
      {/* Main performance card */}
      <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 lg:p-6 shadow-2xl shadow-foreground/5">
        {/* Performance metrics */}
        <div className="grid grid-cols-3 gap-3 lg:gap-4 mb-4">
          <MetricCard label="Traffic Growth" value="247%" trend="+24%" />
          <MetricCard label="Conversion Rate" value="8.2%" trend="+18%" />
          <MetricCard label="Avg. Session" value="3m 42s" trend="+32%" />
        </div>

        {/* Chart area */}
        <div className="bg-secondary/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs text-muted-foreground">Landing Page Performance</div>
            <div className="flex gap-2">
              <div className="h-1.5 w-8 bg-accent rounded" />
              <div className="h-1.5 w-8 bg-muted rounded" />
            </div>
          </div>
          <div className="h-16 text-accent">
            <MiniLineChart />
          </div>
        </div>
      </div>

      {/* Floating cards - Example results */}
      <div className="absolute -left-4 lg:-left-12 top-1/4 bg-card border border-border rounded-lg p-3 shadow-lg animate-[float_6s_ease-in-out_infinite]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground">Traffic Growth</div>
            <div className="text-sm font-semibold text-foreground">+247%</div>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 lg:-right-8 top-1/3 bg-card border border-border rounded-lg p-3 shadow-lg animate-[float_6s_ease-in-out_infinite_1s]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground">Page Speed</div>
            <div className="text-sm font-semibold text-foreground">0.8s Load</div>
          </div>
        </div>
      </div>

      <div className="absolute right-8 lg:right-16 -bottom-6 bg-card border border-border rounded-lg p-3 shadow-lg animate-[float_6s_ease-in-out_infinite_2s]">
        <div className="h-8 w-20 text-accent/80">
          <MiniBarChart />
        </div>
        <div className="text-[10px] text-muted-foreground mt-1">Visitor Engagement</div>
      </div>
    </div>
  )
}

// Landing page optimization metrics visualization
export function StatsVisualization() {
  return (
    <div className="relative bg-card border border-border rounded-xl p-5 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium text-foreground">Optimized Landing Page</div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-muted-foreground">Example Results</span>
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-2.5 rounded-lg bg-secondary/50">
          <div className="text-[10px] text-muted-foreground mb-0.5">Page Speed</div>
          <div className="text-base font-semibold text-foreground">0.8s</div>
        </div>
        <div className="p-2.5 rounded-lg bg-secondary/50">
          <div className="text-[10px] text-muted-foreground mb-0.5">SEO Score</div>
          <div className="text-base font-semibold text-foreground">95%</div>
        </div>
      </div>

      {/* Performance indicators */}
      <div className="space-y-2.5">
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-muted-foreground">Conversion Potential</span>
            <span className="text-foreground font-medium">98%</span>
          </div>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <div className="h-full w-[98%] bg-accent rounded-full" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-muted-foreground">Mobile Optimized</span>
            <span className="text-foreground font-medium">100%</span>
          </div>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <div className="h-full w-full bg-green-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
