const variantStyles = {
    h1: "text-h1 font-black",
    h2: "text-h2 font-semibold",
    h3: "text-h3 font-medium",
    xlarge: "text-xlarge font-medium",
    large: "text-large font-medium",
    medium: "text-medium font-medium",
    small: "text-small font-medium",
    xsmall: "text-xsmall font-medium",
  };
  
  /**
   * @param {Object} props
   * @param {'h1'|'h2'|'h3'|'xlarge'|'large'|'medium'|'small'|'xsmall'} props.variant
   * @param {React.ReactNode} props.children
   * @param {string} [props.className]
   */
  export default function Typography({ variant = 'medium', children, className = '' }) {
    const classes = `${variantStyles[variant] || ''} ${className}`;
    return <p className={classes}>{children}</p>;
  }