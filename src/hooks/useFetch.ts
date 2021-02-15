import React from "react";

interface RequestProps {
  response: any;
  json: any;
}

interface OutProps {
  data: string;
  loading: boolean;
  error: string | null;
  request(url: string, options: {}): Promise<RequestProps>;
}

const useFetch = (): OutProps => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(
    async (url, options): Promise<RequestProps> => {
      let response, json;

      try {
        setError(null);
        setLoading(true);

        response = await fetch(url, options);
        json = await response.json();
        if (!response.ok) throw new Error(json.message);
      } catch (error) {
        json = null;
        setError(error.message);
      } finally {
        setData(json);
        setLoading(false);
        return { response, json };
      }
    },
    []
  );

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
