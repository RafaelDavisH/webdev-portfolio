import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonLink = props => (
    <button type="submit">
      {props.text} <FontAwesomeIcon icon={props.icon} />
    </button>
   )
export default ButtonLink