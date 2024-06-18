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
}) => {
  return (
    <Button bgColor={bgColor} color={textColor} width={width} height={height}>
      {children}
    </Button>
  );
};
