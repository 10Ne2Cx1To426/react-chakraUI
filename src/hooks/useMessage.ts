import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

type Props = {
  title: string;
  status: "info" | "warnig" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        title,
        status,
        position: "top",
        duration: "2000",
        isCloseable: true
      });
    },
    [toast]
  );
  return { showMessage };
};
