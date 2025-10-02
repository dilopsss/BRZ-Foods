"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Logo({ className = "" }: { className?: string }) {
  const [imgSrc, setImgSrc] = useState("/logo-brzfoods.svg?v=1")
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      if (imgSrc.includes(".svg")) {
        setImgSrc("/logo-brzfoods.png?v=1")
      } else if (imgSrc.includes(".png")) {
        setImgSrc("/logo-brzfoods.jpg?v=1")
      }
    }
  }

  return (
    <Link
      href="/"
      className={`flex items-center py-2 transition-opacity hover:opacity-80 ${className}`}
      aria-label="BRZ FOODS Home"
    >
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt="BRZ Foods"
        width={213}
        height={80}
        priority
        className="h-[60px] md:h-[70px] lg:h-[80px] w-auto object-contain max-w-[280px]"
        onError={handleError}
      />
    </Link>
  )
}
