/* eslint-disabled react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useCallback } from "react";

import { User } from "../components/types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loading, setLoadnig] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoadnig(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoadnig(false);
      });
  }, []);
  return { getUsers, loading, users };
};
