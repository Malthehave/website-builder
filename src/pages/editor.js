import { useState } from 'react';
import Link from 'next/link';

import componentList from '../componentList' // All components that can be displayed

const Editor = () => {
    const [previewComponents, setPreviewComponents] = useState([]) // An arrary of items that the preview should display

    const arraryChangeIndex = (arr, oldIndex, newIndex) => {
        if (newIndex >= arr.length) {
            const k = newIndex - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr;
    };

    const handleChangeOrder = () => {
        setPreviewComponents(arraryChangeIndex(previewComponents, 1, 2))
        // Find the index in previewComponent index
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const draggedId = e.dataTransfer.getData("id") // Get id of dragged component
        // Find dropped component from componentList array based on id
        const foundComponent = componentList.find(component => {
            return component.id === draggedId;
        });

        // Make sure that component exists
        if (!foundComponent) { return }

        // Add dropped component to preview state
        setPreviewComponents([...previewComponents, foundComponent])

    }

    const handleDelete = (index, id) => {
        // Make sure to delete the correct component
        if (previewComponents[index].id === id) {
            const newList = previewComponents.filter((component, i) => i !== index); // Only return the items that should stay in the preview
            setPreviewComponents(newList)
        }
    }

    const handleDragStart = (e) => {
        e.dataTransfer.setData("id", e.target.id)
    }


    return (
        <div>
            <nav className="bg-indigo-700 sticky top-0 z-20">
                <div className="relative flex items-center h-16 space-x-8">
                    <Link href="/">
                        <a className="ml-8 rounded-lg text-gray-100 transition ease-in-out duration-150 hover:text-gray-400 focus:outline-none">
                            <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                </path>
                            </svg>
                        </a>
                    </Link>

                    <button className="flex items-center justify-center px-4 py-1 text-base leading-6 font-medium rounded-md shadow text-gray-100 bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline md:text-lg md:py-2 md:px-6">
                        Save
                    </button>
                </div>
            </nav>

            <main>
                <div className="flex flex-wrap flex-col md:flex-row">
                    <div className="w-full md:w-1/4 bg-gray-200 border-r-2 border-gray-300">
                        <div className="bg-gray-200">
                            <h2 className="text-3xl text-gray-700 text-center font-semibold">Editor</h2>
                        </div>
                        <div className="flex flex-col space-y-2 px-4 md:h-screen overflow-y-auto pb-32">

                            <h3 className="text-2xl text-gray-700 font-semibold">Navbars</h3>
                            <div className="component-drag bg-white w-full" draggable="true">
                                <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path>
                                </svg>
                            </div>

                            <h3 className="text-2xl text-gray-700 font-semibold">Heros</h3>
                            {componentList.map(component =>
                                <div key={component.id}>
                                    <h2 className="text-xl text-gray-700 text-center">{component.name}</h2>
                                    <div className="component-drag bg-white w-full" draggable="true" id={component.id} onDragStart={(e) => handleDragStart(e)}>
                                        <img src={component.imageUrl} alt={component.name} draggable="false" className="mx-auto" />
                                    </div>
                                </div>

                            )}
                        </div>
                    </div>
                    <div className="w-full md:w-3/4 bg-white">
                        <div className="bg-gray-200">
                            <h2 className="text-3xl text-gray-700 font-semibold text-center">index.html</h2>
                        </div>
                        <div
                            className="h-full border-gray-700 border-4"
                            onDrop={(e) => handleDrop(e)}
                            onDragOver={e => {
                                e.preventDefault()
                                e.stopPropagation()
                            }}
                            onDragEnter={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                            }}

                            onDragLeave={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                            }}
                        >


                            {previewComponents.map((component, i) => {
                                return (
                                    <div key={i}>
                                        <div className="relative z-10">
                                            <div className="flex space-x-1 absolute -mt-6 right-0 top-0">

                                                <button className="btn-icon text-gray-700 focus:text-gray-600 hover:text-gray-600 rounded-full shadow-lg bg-white"
                                                onClick={() => handleChangeOrder()}
                                                >
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
                                        <div dangerouslySetInnerHTML={{__html: component.html}}></div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div >
            </main >
        </div >
    );
}

export default Editor;
