import Image from 'next/image';
import { useState } from 'react';
useState

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    function handleDropdownClick() {
        setIsActive(!isActive);
    }

    function handleOptionClick() {
        setIsActive(false);
    }

    return (
        <>
            <div class="absolute inset-y-0 right-0 top-5 z-50 items-center sm:hidden">
                <button type="button" class={`dropdown-button mr-2 ${isActive ? 'active' : ''}`} aria-controls="mobile-menu" aria-expanded="false" onClick={handleDropdownClick}>
                    <span class="sr-only">Open main menu</span>
                    <svg class="block h-10 w-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg class="hidden h-10 w-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

            </div>
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 content-center" id="header">

                <div className="logo content-center">
                    <a href="/">
                        <Image src="/logo.png"
                            width="200"
                            height="100"
                            className="mx-auto"
                        />

                    </a>
                    <div className='text-center my-3'>Back to Life.</div>
                </div>
            </div>
            <nav class="text-center">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex  items-center justify-between">

                        <div class="flex flex-1 items-center justify-center sm:items-stretch ">

                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-4">
                                    <a href="#header" class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-light">Start</a>
                                    <a href="#section2" class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-light">Infos</a>
                                    <a href="#section3" class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-light">Dienstleistungen</a>
                                    <a href="#section4" class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-light">Geschäftszeiten</a>
                                    <a href="#contact" class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-light">Kontakt</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isActive && (
                    <div class="sm:hidden" id="mobile-menu">
                        <div class="space-y-1 px-2 pb-3 pt-2">
                            <a href="#header" onClick={handleOptionClick} class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-light">Start</a>
                            <a href="#section2" onClick={handleOptionClick} class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-light">Infos</a>
                            <a href="#section3" onClick={handleOptionClick} class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-light">Dienstleistungen</a>
                            <a href="#section4" onClick={handleOptionClick} class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-light">Geschäftszeiten</a>
                            <a href="#contact" onClick={handleOptionClick} class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-light">Kontakt</a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}