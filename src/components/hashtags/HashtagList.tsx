import { useFeedbackItemsStore } from '../stores/feedbackItemsStore';
import HashtagItem from './HashtagItem';

const HashtagList = () => {
  const getCompanyList = useFeedbackItemsStore((state) =>
    state.getCompanyList(),
  );
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  return (
    <ul className='hashtags'>
      {getCompanyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={selectCompany}
        />
      ))}
    </ul>
  );
};

export default HashtagList;
