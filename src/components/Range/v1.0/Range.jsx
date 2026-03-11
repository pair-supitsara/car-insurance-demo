'use client'
import { Tooltip } from 'react-tooltip'

export default function Range({
    name,
    id,
    value,
    isdisabled,
    col,
    tooltip
}) {

  return (
    <div className={`mb-1 col-${col}`}>
        <label htmlFor={id} className="form-label">
          { name }
          { tooltip && <>
              <i className="bi bi-exclamation-circle-fill text-info m-1"
              data-tooltip-id="mytip" 
              data-tooltip-content={tooltip}></i>
              <Tooltip id="mytip" className='' />
            </>
          }
        </label>
        <input type='range' className="form-range" id={ id } value={ value } disabled={ isdisabled == true ? true : false }/>
    </div>
  )
}
