import FeedbackForm from '../feedback/FeedbackForm';
import Logo from '../Logo';
import PageHeading from '../PageHeading';
import Pattern from '../Pattern';

type HeaderProps = {
  handleAddTolist: (text: string) => void;
};

const Header = ({ handleAddTolist }: HeaderProps) => {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddTolist} />
    </header>
  );
};

export default Header;
