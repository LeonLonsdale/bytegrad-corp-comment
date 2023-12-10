type HashtagListProps = {
  companyList: string[];
};

const HashtagList = ({ companyList }: HashtagListProps) => {
  return (
    <ul className='hashtags'>
      {companyList.map((company) => (
        <li key={company}>
          <button>#{company}</button>
        </li>
      ))}
    </ul>
  );
};

export default HashtagList;
