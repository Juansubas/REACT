import React from 'react';
import GrandChild from './GrandChild';
import ErrorBoundary from './ErrorBoundary';

type Props = {};

function Child ({}: Props) {
  return (
    <div>
      Child
      <ErrorBoundary>
        <GrandChild/>
      </ErrorBoundary>
    </div>
  );
}

export default Child;