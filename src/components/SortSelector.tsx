import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "@tanstack/react-store";
import { gameQueryStore } from "../store";
import { gameQueryActions } from "../store.actions";

const SortSelector = () => {
  const sortOrder = useSelector(gameQueryStore, (s) => s.sortOrder);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-popularity", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{" "}
        {sortOrders.find((o) => o.value === sortOrder)?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => gameQueryActions.setSortOrder(order.value)}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
