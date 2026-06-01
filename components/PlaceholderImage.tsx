'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Props {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  placeholderColor?: string
}

export default function PlaceholderImage({
  src,
  alt,
  fill,
  width,
  height,
  className = '',
  priority = false,
  placeholderColor = '#ECE4DA',
}: Props) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`${fill ? 'absolute inset-0' : ''} ${className}`}
        style={{
          backgroundColor: placeholderColor,
          width: fill ? undefined : width,
          height: fill ? undefined : height,
        }}
      />
    )
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        onError={() => setError(true)}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width!}
      height={height!}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  )
}
