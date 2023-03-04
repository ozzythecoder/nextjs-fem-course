import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  className?: string;
}

const Input = ({ className, children, ...props }: Props) => {
  return (
    <input
      className={clsx(
        "border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full",
        className
      )}
      {...props}
    />
  );
};

export default Input;
