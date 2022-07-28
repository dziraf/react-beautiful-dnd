// @flow
import { useMemo } from 'react';
import type { ContextId } from '../../types';

let count = 0;

export function reset() {
  count = 0;
}

export default function useInstanceCount(): ContextId {
  return useMemo(() => `${count++}`, []);
}
