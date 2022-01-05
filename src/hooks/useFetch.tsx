import { useEffect, useRef, useState } from "react";

const useFetchImages = (url: string) => {
  const [state, setState] = useState({
    list: null,
    loading: true,
    error: null,
  });

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ list: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              list: data,
            });
          }
        }, 2000);
      });
  }, [url]);

  return state;
};

export default useFetchImages;
