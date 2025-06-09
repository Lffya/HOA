import { cn } from "@/lib/utils"

interface PageBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  className?: string
}

export default function PageBanner({
  title,
  subtitle,
  backgroundImage = "/placeholder.svg?height=400&width=1920",
  className,
}: PageBannerProps) {
  return (
    <div className={cn("relative h-64 md:h-80 flex items-center justify-center overflow-hidden", className)}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-hoa-charcoal/80 to-hoa-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">{title}</h1>
        {subtitle && (
          <>
            <div className="w-16 h-1 bg-hoa-gold mx-auto mb-4" />
            <p className="text-xl text-white/90">{subtitle}</p>
          </>
        )}
      </div>
    </div>
  )
}
