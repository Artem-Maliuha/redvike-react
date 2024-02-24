'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto border border p-[24px]">
      <h2 className="font-bold">Something went wrong!</h2>
      <div>{error.message}</div>
    </div>
  )
}
