'use client'

export default function Card({ name, color='blue', children }) {
    return (
        <div className="card h-100">
            <div className={`card-header bg-${color} text-white`}>
                <h5>{ name }</h5>
            </div>
            <div className="card-body">
                <div className='row'>
                    { children }
                </div>
            </div>
        </div>
    )
}