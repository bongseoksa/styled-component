/** 스타일 참조. 기존 스타일을 참조하여 부가적인 스타일 적용.
 * sass의 @import 와 비슷한 기능(?)
 */
import styled from "styled-components";

const Button = styled.button`
  color: #0000ff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
`;

// A new component based on Button, but with some override styles
const ExtendingButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export { ExtendingButton };
