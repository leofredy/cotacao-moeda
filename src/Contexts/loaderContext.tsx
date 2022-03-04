import React, { createContext, useState } from "react";

interface Context {
  loading: boolean,
  changeLoading: (status: boolean) => void
}

interface Props {
  children: React.ReactNode
}

export const LoaderContext = createContext<Context>({
  loading: false,
  changeLoading: () => {throw new Error('setContext function must be overridden');}
});

export default function LoaderProvider({ children }: Props) {
  const [loading, setLoading] = useState(false);

  function changeLoading(status: boolean) {
    setLoading(status);
  }

  return (
    <LoaderContext.Provider
      value={{
        loading,
        changeLoading: changeLoading
      }}
    >
      { children }
    </LoaderContext.Provider>
  );
}
