type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type SVG = React.SVGProps<SVGSVGElement> | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

type Props = {
  /**
   * If true, the color is inherited from parent.
   */
  inheritColor?: boolean;
  /**
   * If true, the link is disabled.
   */
  disabled?: boolean;
  /**
   * @Deprecated Source of the icon.
   */
  iconSrc?: string;
  /**
   * Element used as the icon that will be placed next to the link text.
   */
  icon?: SVG;
  /**
   * Indicates the position of the icon in the component.
   */
  iconPosition?: "before" | "after";
  /**
   * Page to be opened when the user clicks on the link.
   */
  href?: string;
  /**
   * If true, the page is opened in a new browser tab.
   */
  newWindow?: boolean;
  /**
   * If defined, the link will be displayed as a button. This 
   * function will be called when the user clicks the link.
   */
  onClick?: () => void;
  /**
   * Link text.
   */
  text: string;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin?: Space | Margin;
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;
};

export default Props;
