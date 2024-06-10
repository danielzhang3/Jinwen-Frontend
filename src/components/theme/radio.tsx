import React, { InputHTMLAttributes, useRef } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio: React.FC<IProps> = ({ label, ...rest }) => {
  const ref = useRef(null);
  const handleLabelClick = () => {
    ref?.current?.click();
  };
  return (
    <div className={`flex items-baseline gap-2 text-dbBlack ${rest.className}`}>
      <input {...rest} className="" type="radio" ref={ref} />
      {label ? (
        <label className="leading-none" onClick={handleLabelClick}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Radio;
