import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "./styles.css";
import AvatorHeader from "./AvatorHeader";
import { GetCurrentUserQuery } from "@/__generated__/graphql";
import { Link } from "react-router-dom";

const DropdownHeader = ({
  user,
}: {
  user: GetCurrentUserQuery | undefined;
}) => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <AvatorHeader img={user?.image} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            <Link to="/create/new">Dashboard</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <Link to="/create/new">Create a Post</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <Link to="/create/new">View Profile</Link>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Item className="DropdownMenuItem" disabled>
            {user?.name}
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" disabled>
            {user?.email}
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownHeader;
