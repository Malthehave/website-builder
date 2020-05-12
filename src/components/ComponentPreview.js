import React from 'react';

const ComponentPreview = (props) => {
    return (
        <div>
            {props.previewComponents.map((component, i) => {
                return (
                    <div key={i}>
                        <div className="relative z-10">
                            <div className="flex space-x-1 absolute -mt-6 right-0 top-0">

                                <button className="btn-icon text-gray-700 focus:text-gray-600 hover:text-gray-600 rounded-full shadow-lg bg-white">
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12">
                                        </path>
                                    </svg>
                                </button>

                                <button className="btn-icon text-red-700 focus:text-red-600 hover:text-red-600 rounded-full shadow-lg bg-white"
                                    onClick={() => handleDelete(i, component.id)}
                                >
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: component.html }}>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default ComponentPreview;
