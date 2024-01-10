import * as Style from "./PseudoAndNestingStyle";

const PseudoAndNesting = () => {
  return (
    <>
      <Style.Thing>Hello world!</Style.Thing>
      <Style.Thing>How ya doing?</Style.Thing>
      <Style.Thing className="something">The sun is shining...</Style.Thing>
      <div>Pretty nice day today.</div>
      <Style.Thing>Don't you think?</Style.Thing>
      <div className="something-else">
        <Style.Thing>Splendid.</Style.Thing>
      </div>
    </>
  );
};

export default PseudoAndNesting;
