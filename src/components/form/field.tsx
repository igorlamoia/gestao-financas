import { HTMLAttributes } from 'react';

type FieldProps = HTMLAttributes<HTMLDivElement>;

export default function Field(props: FieldProps) {
  return (
    <div
      {...props}
      className={`flex flex-col gap-1 ` + props.className ?? ''}
    />
  );
}
