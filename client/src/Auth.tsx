import { useQuery } from "@apollo/client";
import { useState, createContext, useEffect, useMemo } from "react";
import { GET_CURRENT_USER } from "./graphql/operations/query/user";
import { GetCurrentUserQuery } from "./__generated__/graphql";

interface UserContextProps {
  user?: GetCurrentUserQuery;
  setUser: (user: GetCurrentUserQuery | undefined) => void;
}
export const AuthContext = createContext<UserContextProps>({
  user: undefined,
  setUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<GetCurrentUserQuery | undefined>(undefined);

  const { data, error } = useQuery(GET_CURRENT_USER);

  useEffect(() => {
    if (data && data.getCurrentUser) {
      setUser(data.getCurrentUser);
    } else if (error) {
      setUser(undefined);
    }
  }, [data, error]);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
