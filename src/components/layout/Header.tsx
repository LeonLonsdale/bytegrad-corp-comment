import FeedbackForm from '../feedback/FeedbackForm';
import Logo from '../Logo';
import PageHeading from '../PageHeading';
import Pattern from '../Pattern';
import { useFeedbackItemsStore } from '../stores/feedbackItemsStore';

const Header = () => {
  const addFeedback = useFeedbackItemsStore((state) => state.addFeedback);

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addFeedback} />
    </header>
  );
};

export default Header;
