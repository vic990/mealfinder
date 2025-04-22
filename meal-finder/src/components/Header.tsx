import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { IoMdSearch } from "react-icons/io";
import { searchForm } from "../types";

type Props = {
  onSubmit: (data: searchForm) => void;
};

function Header({ onSubmit }: Props) {
  const { register, formState, handleSubmit } = useForm<searchForm>();

  return (
    <Container mt="1" maxW="3xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IoMdSearch color="gray" />
          </InputLeftElement>
          <Input
            mr="2"
            focusBorderColor={
              !!formState.errors.search ? "crimson" : "blue.400"
            }
            isInvalid={!!formState.errors.search}
            {...register("search", { required: true })}
            type="text"
            placeholder="Try 'chicken' O 'beans'..."
          />

          <Button color="white" type="submit" bgColor="blue.400">
            Search
          </Button>
        </InputGroup>
      </form>
    </Container>
  );
}

export default Header;
