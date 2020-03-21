import React, { ReactElement } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

type UsersProps = {
  users: string[];
  selectedName: string | null;
  selectUser: (name: string) => void;
};

export default class UsersList extends React.Component<UsersProps> {
  state = {
    sortedNames: this.props.users.slice().sort()
  };

  render() {
    const { selectedName, selectUser } = this.props;
    const { sortedNames } = this.state;

    return (
      <List aria-label="users">
        {sortedNames.map((name: string) => (
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
}
