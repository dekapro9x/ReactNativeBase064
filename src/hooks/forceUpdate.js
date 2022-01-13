import {useState} from 'react';

function useForceUpdate() {
  const [, setIt] = useState(false);
  return () => setIt(it => !it);
}

export {useForceUpdate};
