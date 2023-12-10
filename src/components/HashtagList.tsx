type HashtagListProps = {};

const HashtagList = ({}: HashtagListProps) => {
  return (
    <ul className='hashtags'>
      <li>
        <button>#Facebook</button>
      </li>
      <li>
        <button>#Nike</button>
      </li>
      <li>
        <button>#ByteGrad</button>
      </li>
      <li>
        <button>#Adidas</button>
      </li>
    </ul>
  );
};

export default HashtagList;
