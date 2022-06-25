import React, { ReactElement } from 'react';
export type RejectedFallbackFuncType = ({
  error,
  reset,
}: {
  error: Error | null;
  reset: () => void;
}) => ReactElement;

interface IErrorBoundaryState {
  hasError: boolean;
  error: null;
}

interface IProps {
  renderFallback: RejectedFallbackFuncType;
  resetKey?: string[];
  [x: string]: unknown;
}

class ErrorBoundary extends React.Component<IProps, IErrorBoundaryState> {
  initState: IErrorBoundaryState = { hasError: false, error: null };

  constructor(props: IProps) {
    super(props);
    this.state = this.initState;
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidUpdate(prevProps: IProps) {
    if (!this.state.hasError == null) return;
    // 외부에서 다른 상황으로 바뀔경우 에러를 초기화해줘야하므로 뚫어준 인터페이스. resetKey가 바뀌면 리셋
    if (prevProps.resetKey !== this.props.resetKey) {
      this.resetErrorBoundary();
    }
  }

  componentDidCatch(error: Error) {
    // Error의 로깅 방식을 추가한다
    console.log('>>>>>error', error);
  }

  resetErrorBoundary() {
    this.setState(this.initState);
  }

  render() {
    const { children, renderFallback } = this.props;
    const { hasError, error } = this.state;

    if (hasError) {
      return renderFallback({
        error,
        reset: this.resetErrorBoundary,
      });
    }
    return children;
  }
}

export default ErrorBoundary;
