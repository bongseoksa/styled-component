import * as Style from "./styledComponentStyle";
import Link from "next/link";

const StyledComponent = () => {
  return (
    <div>
      <Link href="">Unstyled, boring Link</Link>
      <br />
      <Style.StyledLink href="">Styled, exciting Link</Style.StyledLink>
    </div>
  );
};

export default StyledComponent;
