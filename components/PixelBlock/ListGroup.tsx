import React from "react";
import ListItem from "./ListItem";

interface ListGroupItem {
  label: string;
  content: string;
}

interface ListGroupProps {
  items: ListGroupItem[];
}

const ListGroup: React.FC<ListGroupProps> = ({ items }) => (
  <div className="flex flex-col gap-6">
    {items.map((item, index) => (
      <ListItem key={index} label={item.label} content={item.content} />
    ))}
  </div>
);

export default ListGroup;
