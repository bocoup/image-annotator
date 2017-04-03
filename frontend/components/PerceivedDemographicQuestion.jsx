import React, { PropTypes } from 'react';
import classNames from 'classnames';

import strToId from '../utils/str-to-id';

import RadioButtonOption from './RadioButtonOption';

import styles from './PerceivedDemographics.styl';

// ESLint didn't detect all props as being used without this destructuring...
const PerceivedDemographicQuestion = ({
  className,
  name,
  options,
  onChange,
  selected,
  questionProgress,
}) => (
  <fieldset className={classNames(className, styles.fieldset)}>
    <h4 className={styles.PerceivedDemographicTitle}>{name}</h4>
    {questionProgress}
    {options.map((option) => {
      const optionKey = `${strToId(name)}_${strToId(option)}`;
      return (
        <RadioButtonOption
          key={optionKey}
          id={optionKey}
          name={name}
          value={option}
          checked={option === selected}
          onChange={onChange}
          required
        />
      );
    })}
  </fieldset>
);

PerceivedDemographicQuestion.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  questionProgress: PropTypes.element.isRequired,
};

PerceivedDemographicQuestion.defaultProps = {
  className: '',
  selected: '',
};

export default PerceivedDemographicQuestion;
