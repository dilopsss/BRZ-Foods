export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      {/* Globe SVG */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="16" cy="16" rx="6" ry="14" stroke="currentColor" strokeWidth="2" />
        <path d="M2 16h28M2 10h28M2 22h28" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* 3-color bar */}
      <div className="flex h-1 w-16 overflow-hidden rounded-full">
        <div className="flex-1 bg-primary" />
        <div className="flex-1 bg-secondary" />
        <div className="flex-1 bg-accent" />
      </div>
    </div>
  )
}
