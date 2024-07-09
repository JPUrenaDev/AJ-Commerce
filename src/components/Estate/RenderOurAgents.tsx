import React, { useState } from "react";

export const RenderOurAgents = ({ agents }) => {
  return <img className="w-[150px] h-[150px]" src={agents.img}></img>;
};
