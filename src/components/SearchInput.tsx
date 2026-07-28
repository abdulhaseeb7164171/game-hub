import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { gameQueryActions } from "../store.actions";
import { useNavigate } from "@tanstack/react-router";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) {
          gameQueryActions.setSearchText(ref.current.value);
          navigate({ to: "/" });
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder="Search games..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
