import { useRouter } from "next/navigation";
import { useState } from "react";

const useSearchBar = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchValue) return;

    router.push(`/search?query=${searchValue}`);
    setSearchValue("");
  };

  return {
    searchValue,
    handleChange,
    handleSubmit,
  };
};

export default useSearchBar;
