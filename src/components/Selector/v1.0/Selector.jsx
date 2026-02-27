'use client'
import { Tooltip } from 'react-tooltip'

export default function Selector({
    name,
    id,
    options=[],
    set_key_option,
    set_value_option,
    defaultValue,
    isdisabled=false,
    col,
    tooltip=""
}) {

  return (
    <div className={`mb-1 col-${col}`}>
        <label htmlFor={name} className="form-label">
          { name }
          { tooltip && <>
              <i className="bi bi-exclamation-circle-fill text-info m-1"
              data-tooltip-id="mytip" 
              data-tooltip-content={tooltip}></i>
              <Tooltip id="mytip" className={Styles.tooltip} />
            </>
          }
        </label>
        <select className="form-select" disabled={isdisabled}>
          {options.map((option) => 
            <option key={option[set_key_option]} value={option[set_key_option]} defaultValue={option[set_value_option]}>
              {option[set_value_option]}
            </option>)
          }
        </select>
    </div>
  )
}
