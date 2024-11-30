interface ListItemProps {
    label: string;
    content: string;
  }
  
  const ListItem: React.FC<ListItemProps> = ({ label, content }) => (
    <dl className="flex flex-col gap-1">
      <dt>{label}</dt>
      <dd className="font-semibold text-black">{content}</dd>
    </dl>
  );
  
  export default ListItem;
  