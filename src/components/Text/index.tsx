import React from "react";

interface IProps {
  label: string | undefined;
  value: string | undefined;
}

const Text = ({ label = "", value = "" }: IProps) => {
  return (
    <div>
      <strong>{label}</strong> {value}
    </div>
  );
};

export default Text;
