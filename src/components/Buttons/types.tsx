export interface ButtonProps {
  width?: string;
  height?: string;
}

export interface PrimaryButtonProps extends ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
