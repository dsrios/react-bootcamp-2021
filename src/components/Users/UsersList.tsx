import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

type UsersProps = {
  users: string[];
  selectedName: string | null;
  selectUser: (name: string) => void;
};

type UsersState = {
  sortedNames: string[];
};

export default class UsersList extends React.Component<UsersProps, UsersState> {
  private listRef = React.createRef<HTMLDivElement>();
  constructor(props: UsersProps) {
    super(props);
    this.state = {
      sortedNames: []
    };
  }

  static getDerivedStateFromProps(props: UsersProps, state: UsersState) {
    if (state.sortedNames.length < props.users.length) {
      const sortedNames = props.users.slice().sort();
      return { sortedNames };
    }
    return null;
  }

  shouldComponentUpdate(nextProps: UsersProps, nextState: UsersState) {
    return (
      this.state.sortedNames.length !== nextState.sortedNames.length ||
      this.props.selectedName !== nextProps.selectedName
    );
  }

  getSnapshotBeforeUpdate(prevProps: UsersProps, prevState: UsersState) {
    if (prevProps.users.length < this.props.users.length) {
      const list = this.listRef.current;
      if (list) {
        return list.scrollHeight - list.scrollTop;
      }
    }
    return null;
  }

  componentDidUpdate(
    prevProp: UsersProps,
    prevState: UsersState,
    snapshot: number
  ) {
    console.log("snapshot", snapshot);
    const list = this.listRef.current;
    if (list) {
      console.log("currentRef", list.scrollHeight - list.scrollTop);
    }
  }

  render() {
    const { selectedName, selectUser } = this.props;
    return (
      <div ref={this.listRef}>
        <List aria-label="users">
          {this.state.sortedNames.map((name: string) => (
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
      </div>
    );
  }
}
