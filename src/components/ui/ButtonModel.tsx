import styled from "styled-components";

const Button = styled.button`
  ${(props) => `
    
    color: ${props.color};
    font-size: 1em;
    
    padding: 0.25em 1em;
    border: 3px ;
    border-radius: 6px;
    height:${props.heigth};
    width:${props.width};
    display: block;
    border: 1px solid #a5b4fc; 
    background-color:${props.bgColor};
  `}
`;

export const ButtonModel = ({
  children,
  bgColor,
  textColor,
  height,
  width,
  hasFuntion = false,
}) => {
  return (
    <Button
      onClick={hasFuntion}
      bgColor={bgColor}
      color={textColor}
      width={width}
      height={height}
    >
      <div className="flex items-center gap-1 justify-center">{children}</div>
    </Button>
  );
};
