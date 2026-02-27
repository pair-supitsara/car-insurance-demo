'use client'

export default function Button({ name, type='button', icon='', handleButton, isdisabled=false }) {
    return (
        <div className="d-flex justify-content-center p-2">
            <button type={type} className='btn btn-primary px-4 py-2' onClick={handleButton} disabled={isdisabled} >
                {icon && <i className={`${icon} me-2`}></i>}
                { name }
            </button>
        </div>
    )
}