import * as Style from "./adaptedStyle";
import { TitleType } from "./adaptedPropsType";

const AdaptedProps = ({ color }: TitleType) => {
  return (
    <Style.Wrapper>
      <Style.Title color={color}>adaptedProps{color}</Style.Title>
    </Style.Wrapper>
  );
};

export default AdaptedProps;
