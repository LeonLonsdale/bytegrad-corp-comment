const Footer = () => {
  return (
    <footer>
      <small>
        <p>
          &copy; Copyright{' '}
          <a href='https://bytegrad.com' target='_blank'>
            ByteGrad
          </a>{' '}
          {new Date().getFullYear()}
        </p>
        <p>
          <span className='u-bold u-italic'>
            Not to be used as your own teaching material.
          </span>
        </p>
      </small>
    </footer>
  );
};

export default Footer;
