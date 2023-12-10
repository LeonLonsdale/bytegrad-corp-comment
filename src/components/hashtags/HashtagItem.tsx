type HashtagItemProps = {
  company: string;
};

const HashtagItem = ({ company }: HashtagItemProps) => {
  return (
    <li>
      <button>#{company}</button>
    </li>
  );
};

export default HashtagItem;
