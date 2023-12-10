import { TriangleUpIcon } from '@radix-ui/react-icons';

type FeedbackListProps = {};

const FeedbackList = ({}: FeedbackListProps) => {
  return (
    <ol className='feedback-list'>
      <li className='feedback'>
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>

        <div>
          <p>B</p>
        </div>

        <div>
          <p>ByteGrad</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            est expedita libero officia eum distinctio hic quidem, sit saepe,
            rem quos tempora earum. Porro hic natus nostrum ipsam? Sint, est?
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
};

export default FeedbackList;
