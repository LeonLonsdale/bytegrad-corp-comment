import HashtagItem from './HashtagItem';

type HashtagListProps = {
  companyList: string[];
  handleSelectedCompany: (company: string) => void;
};

const HashtagList = ({
  companyList,
  handleSelectedCompany,
}: HashtagListProps) => {
  return (
    <ul className='hashtags'>
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={handleSelectedCompany}
        />
      ))}
    </ul>
  );
};

export default HashtagList;
