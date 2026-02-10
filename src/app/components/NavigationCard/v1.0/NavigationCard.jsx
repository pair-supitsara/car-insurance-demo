'use client'

import { useState } from 'react';

export default function NavigationCard({ panelComponents=[], color }) {
    const [activePanel, setActivePanel] = useState(null);

    return (
        <div className={`card h-100`}>
            <div className={`card-header bg-${color}`}>
                <ul className={`nav nav-tabs card-header-tabs `}>
                    {panelComponents.length > 0 && panelComponents.map((item, index) => (
                        <li key={index}>
                            <a
                                className={`nav-link ${item.nameclass || 'plainTab'} ${activePanel?.name === item.name ? 'active' : ''}`}
                                onClick={() => setActivePanel(item)}
                            >
                                <h6 className='mb-1 fw-bold'>
                                    <i className={`${item.icon} me-2`}></i>
                                    {item.name}
                                </h6>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="card-body">
                <div className='row'>
                    {activePanel && activePanel.component}
                </div>
            </div>
        </div>
    );
}
