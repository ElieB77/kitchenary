import { useRouter } from "next/navigation";
import { useState } from "react";

const useSearchBar = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!searchValue) return;

    return router.push(`/search?query=${searchValue}`);
  };

  return {
    searchValue,
    handleChange,
    handleSubmit,
  };
};

export default useSearchBar;
