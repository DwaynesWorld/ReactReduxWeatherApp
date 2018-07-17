import React, { Component } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default props => {
  return (
    <React.Fragment>
      <Sparklines data={props.data} height={120} width={180}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </React.Fragment>
  );
};
