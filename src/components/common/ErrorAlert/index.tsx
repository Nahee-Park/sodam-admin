import React, { ReactNode } from 'react';

interface ErrorAlertProps  {
  error: Error | null;
}
function ErrorAlert(error: ErrorAlertProps) {
  console.log(error);
  return <div>ErrorAlert</div>;
}

export default ErrorAlert;
