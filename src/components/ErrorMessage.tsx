type ErrorMessageProps = {
  errorMessage: string;
};
const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return <p>{errorMessage}</p>;
};

export default ErrorMessage;
