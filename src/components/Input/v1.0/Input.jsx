'use client'
import { Tooltip } from 'react-tooltip'
import Styles from './Input.module.css'

export default function Input({
    name,
    id,
    type='text',
    value,
    isdisabled,
    col,
    tooltip
}) {

  return (
    <div className={`mb-1 col-${col}`}>
        <label htmlFor="customername" className="form-label">
          { name }
          { tooltip && <>
              <i className="bi bi-exclamation-circle-fill text-info m-1"
              data-tooltip-id="mytip" 
              data-tooltip-content={tooltip}></i>
              <Tooltip id="mytip" className={Styles.tooltip} />
            </>
          }
        </label>
        <input type={ type } className="form-control" id={ id } value={ value } disabled={ isdisabled == true ? true : false }/>
    </div>
  )
}
