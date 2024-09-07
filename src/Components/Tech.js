import React from "react";

import {BallCanvas} from "./Canvas"
import { SectionWrapper } from "../hoc";
import technologies from "../constants/technologies";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <h1>Skills</h1>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "")