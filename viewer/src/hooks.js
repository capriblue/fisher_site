import { useCallback, useEffect, useState } from "react";

export function useLocalStorage(defaultValue, STORAGE_KEY) {
  const [internalState, setInternalState] = useState(defaultValue);
  useEffect(() => {
    const StorageState = localStorage.getItem(STORAGE_KEY);
    if (StorageState !== defaultValue) {
      setInternalState(StorageState);
    }
  }, [setInternalState]);

  const setState = useCallback(
    (state) => {
      localStorage.setItem(STORAGE_KEY, state);
      setInternalState(state);
    },
    [setInternalState]
  );
  return [internalState, setState];
}
