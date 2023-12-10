import HashtagItem from './HashtagItem';

type HashtagListProps = {
  companyList: string[];
};

const HashtagList = ({ companyList }: HashtagListProps) => {
  return (
    <ul className='hashtags'>
      {companyList.map((company) => (
        <HashtagItem key={company} company={company} />
      ))}
    </ul>
  );
};

export default HashtagList;
