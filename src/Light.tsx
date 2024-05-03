type Props = {
  variant?: "green" | "red" | "yellow";
};

const Light = (props: Props) => {
  return (
    <div
      style={{
        background: props.variant,
        borderRadius: "50%",
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Light;
