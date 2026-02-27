'use client'

export default function RadioInput({ name="n/a", groupRadio, value=null, col=1, onChange }) {
    return (
        <div className={`form-check p-2 col-${col}`}>
            <input className="form-check-input mx-2" type="radio" name={groupRadio} value={value} id={654} onChange={onChange} />
            <label className="form-check-label" htmlFor={654}>
                { name }
            </label>
        </div>
    )
}