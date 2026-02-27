'use client'

export default function Accordion({ id, array=[{ topic: 'asd', component: '<span>asd</span>' }] }) {
    return (
        <div className="accordion" id={id}>
            { array.length > 0 && array.map((item, index) => (
                <div className="accordion-item" key={item.topic}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-lightblue text-blue fw-bolder p-2" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-${index}`} aria-expanded="false" aria-controls={`panelsStayOpen-${index}`}>
                            { item.topic }
                        </button>
                    </h2>
                    <div id={`panelsStayOpen-${index}`} className={`accordion-collapse collapse ${' ' /* show */} `}>
                        <div className="accordion-body">
                            { item.component }
                        </div>
                    </div>
                </div>))
            }
        </div>
    )
}