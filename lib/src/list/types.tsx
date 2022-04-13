type SVG = React.SVGProps<SVGSVGElement> | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

type Props = {
  children: React.ReactNode;
  gutter?:
    | "none"
    | "xxxsmall"
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "xxxlarge";
  type?: "disc" | "circle" | "square" | "number" | "icon";
  icon?: string | SVG;
  size?: "xsmall" | "small" | "standard" | "large";
};
export default Props;
