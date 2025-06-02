const AppButton = ({ variant = 'primary', children, ...props }) => {
  return (
    <button
      className={`btn btn-${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;
