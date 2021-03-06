import * as React from 'react';

const useOutsideClickListener = (ref:any, action:Function) => {
  const onClick = (e:Event) => {
    if (!!ref && ref.current && !ref.current.contains(e.target)) {
      action();
    }
  };

  React.useEffect(() => {
    window.addEventListener('mousedown', onClick);
    return () => {
      window.removeEventListener('mousedown', onClick);
    };
  }, []);
};

export default useOutsideClickListener;
