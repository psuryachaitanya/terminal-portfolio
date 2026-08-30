import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle color theme"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
