import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '4rem 2rem', 
          textAlign: 'center', 
          background: 'var(--bg-paper)', 
          borderRadius: '24px', 
          border: '1px solid var(--border-light)',
          maxWidth: '500px',
          margin: '4rem auto',
          boxShadow: '0 20px 40px -20px rgba(0,0,0,0.1)'
        }}>
          <div style={{ 
             fontSize: '4rem', 
             marginBottom: '1.5rem',
             filter: 'drop-shadow(0 10px 10px rgba(239, 68, 68, 0.2))' 
          }}>🛠️</div>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
            A slight craft error
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Something went wrong while building the interface. Don't worry, your data is likely safe in the state.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button 
              onClick={() => window.location.reload()}
              style={{ 
                padding: '12px 24px', 
                background: 'var(--primary)', 
                color: 'white', 
                border: 'none', 
                borderRadius: '99px',
                cursor: 'pointer',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
              }}
            >
              Reload Page
            </button>
            <button 
              onClick={() => window.location.href = '#/'}
              style={{ 
                padding: '12px 24px', 
                background: 'white', 
                color: 'var(--text-main)', 
                border: '1px solid var(--border-medium)', 
                borderRadius: '99px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              Back to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
