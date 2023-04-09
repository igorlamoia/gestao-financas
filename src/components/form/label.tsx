import { LabelHTMLAttributes } from 'react';

export default function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className="text-sm text-purple-600 flex items-center justify-between"
      {...props}
    />
  );
}
