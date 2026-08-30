import { useEffect, useRef, useState } from 'react'

const WORD_DELAY_MS = 30

export function useStreamingText(fullText: string, enabled: boolean) {
  const [visibleText, setVisibleText] = useState(enabled ? '' : fullText)
  const [isStreaming, setIsStreaming] = useState(enabled)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!enabled) {
      setVisibleText(fullText)
      setIsStreaming(false)
      return
    }

    const words = fullText.split(' ')
    let index = 0
    setVisibleText('')
    setIsStreaming(true)

    function tick() {
      index += 1
      setVisibleText(words.slice(0, index).join(' '))
      if (index < words.length) {
        timeoutRef.current = setTimeout(tick, WORD_DELAY_MS)
      } else {
        setIsStreaming(false)
      }
    }

    timeoutRef.current = setTimeout(tick, WORD_DELAY_MS)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullText, enabled])

  function complete() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setVisibleText(fullText)
    setIsStreaming(false)
  }

  return { visibleText, isStreaming, complete }
}
