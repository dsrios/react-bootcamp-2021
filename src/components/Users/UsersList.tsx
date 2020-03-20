import React, { ReactElement } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

type UsersProps = {
  users: string[];
  selectedName: string | null;
  selectUser: (name: string) => void;
};

export default function UsersList({
  users,
  selectedName,
  selectUser
}: UsersProps): ReactElement {
  return (
    <List aria-label="users">
      {users.map((name: string) => (
        <ListItem
          button
          onClick={() => selectUser(name)}
          key={name}
          divider
          selected={selectedName === name}
        >
          {name}
        </ListItem>
      ))}
    </List>
  );
}
