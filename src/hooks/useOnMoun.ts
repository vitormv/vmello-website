import { useEffect } from 'react';

const useOnMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export { useOnMount };
