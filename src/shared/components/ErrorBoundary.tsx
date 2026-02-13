import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Button } from '@/shared/ui'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode | ((error: Error, reset: () => void) => ReactNode)
}

interface ErrorBoundaryState {
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[ErrorBoundary]', error, errorInfo)
  }

  private reset = () => {
    this.setState({ error: null })
  }

  render() {
    const { error } = this.state
    const { children, fallback } = this.props

    if (!error) return children

    if (fallback !== undefined) {
      return typeof fallback === 'function' ? fallback(error, this.reset) : fallback
    }

    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-6">
        <div className="w-full max-w-md space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Something went wrong
            </h1>
            <p className="text-sm text-muted-foreground">
              An unexpected error occurred. Please try again.
            </p>
          </div>

          {import.meta.env.DEV && (
            <pre className="max-h-40 overflow-auto rounded-lg border bg-card p-4 text-left text-xs text-destructive">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          )}

          <div className="flex justify-center gap-3">
            <Button variant="outline" onClick={this.reset}>
              Try again
            </Button>
            <Button
              onClick={() => {
                window.location.assign('/')
              }}
            >
              Go home
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
