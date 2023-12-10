const Footer = () => {
  return (
    <footer className='footer'>
      <small>
        <p>
          &copy; Copyright{' '}
          <a href='https://bytegrad.com' target='_blank'>
            ByteGrad.com
          </a>{' '}
          {new Date().getFullYear()} Intended for learning or your portfolio.
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
