import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export function Skills(){
  return(
    <section className="skills" id="skills">
        <h2 className='title-skills'>Front-end</h2>
        <section className="collection-skills">
          <div className="img-1"></div>
          <div className="img-2"></div>
          <div className="img-3"></div>
          <div className="img-4"></div>
        </section>
        <section className="manual-navigation">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="front-end" control={<Radio />} />
            <FormControlLabel value="back-end" control={<Radio />} />
            <FormControlLabel value="design" control={<Radio />} />
            <FormControlLabel value="off-line" control={<Radio />} />
          </RadioGroup>
        </section>
      </section>
  );
}