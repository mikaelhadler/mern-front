/* eslint-disable react/prop-types */
import "@/components/Input/Input.css";
import Button from "@/components/Button";

const Input = ({
  type = "text",
  placeholder,
  withButton = false,
  value,
  onChange,
  children
}) => (
  <div className="wrapper">
    <input className="input" type={type} placeholder={placeholder} value={value} onChange={onChange} />
    {withButton && <Button className="button">{children}</Button>}
  </div>
);

export default Input;
