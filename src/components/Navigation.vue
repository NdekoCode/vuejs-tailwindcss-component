<template>
    <div class="w-64 h-screen bg-gray-900 rounded-md">
        <div class="px-6">
            <div class="pt-8">
                <!--TOPBAR NAVIGATION-->
                <div class="flex items-center justify-between">
                    <a
                        href="#"
                        class="
                            bg-blue-500
                            p-1.5
                            rounded
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <svg
                            class="w-5 h-5 text-white stroke-current"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </a>
                    <button
                        class="
                            flex
                            items-center
                            justify-center
                            rounded
                            bg-gray-800
                            p-0.5
                        "
                    >
                        <svg
                            class="w-3 h-3 text-gray-300 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10.25 6.75L4.75 12L10.25 17.25"
                            />
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19.25 12H5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="pt-4">
                <div class="relative">
                    <div
                        class="absolute inset-y-0 left-0 flex items-center pl-2"
                    >
                        <svg
                            class="w-4 h-4 text-gray-500 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        class="
                            pl-8
                            rounded
                            outline-none
                            px-4
                            py-2.5
                            text-gray-500
                            placeholder-gray-500
                            bg-gray-800
                            w-full
                            text-xs
                            border border-transparent
                            focus:border-gray-500
                        "
                    />
                </div>
            </div>

            <div class="pt-4">
                <hr class="border-gray-700 w-full" />
            </div>
            <div class="pt-4">
                <ul class="flex flex-col space-y-2">
                    <li class="text-gray-500 relative hover:text-white">
                        <div class="absolute flex items-center inset-y-0 pl-2">
                            <svg
                                class="w-5 h-5 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
                                ></path>
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M9.75 8.75V19"
                                ></path>
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M5 8.25H19"
                                ></path>
                            </svg>
                        </div>
                        <a
                            href="#"
                            class="
                                text-xs
                                inline-block
                                border border-transparent
                                w-full
                                text-gray-500
                                pl-8
                                pr-4
                                py-2
                                hover:bg-gray-800
                                rounded
                                hover:text-gray-400 hover:border-gray-400
                            "
                            >Dashboard</a
                        >
                    </li>

                    <li class="">
                        <div
                            class="
                                text-gray-500
                                relative
                                hover:text-white
                                flex
                                justify-between
                                items-center
                            "
                        >
                            <div class="flex items-center w-full">
                                <div
                                    class="
                                        absolute
                                        flex
                                        items-center
                                        inset-y-0
                                        pl-2
                                        pointer-events-none
                                    "
                                >
                                    <svg
                                        class="w-5 h-5 stroke-current"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M18 9.25H13.75V5"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M9.75 15.25H14.25"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M9.75 12.25H14.25"
                                        ></path>
                                    </svg>
                                </div>
                                <a
                                    href="#"
                                    class="
                                        text-xs
                                        inline-block
                                        border border-transparent
                                        w-full
                                        text-gray-500
                                        pl-8
                                        pr-4
                                        py-2
                                        hover:bg-gray-800
                                        rounded
                                        hover:text-gray-400
                                        hover:border-gray-400
                                    "
                                    >Content</a
                                >
                            </div>
                            <button
                                class="absolute right-0 p-1 flex items-center"
                            >
                                <svg
                                    class="w-5 h-5 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15.25 10.75L12 14.25L8.75 10.75"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </li>

                    <li class="text-gray-500 relative hover:text-white">
                        <div class="absolute flex items-center inset-y-0 pl-2">
                            <svg
                                class="w-5 h-5 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                        </div>
                        <a
                            href="#"
                            class="
                                text-xs
                                inline-block
                                border border-transparent
                                w-full
                                text-gray-500
                                pl-8
                                pr-4
                                py-2
                                hover:bg-gray-800
                                rounded
                                hover:text-gray-400 hover:border-gray-400
                            "
                            >Design</a
                        >
                    </li>

                    <li class="text-gray-500 relative hover:text-white">
                        <div class="absolute flex items-center inset-y-0 pl-2">
                            <svg
                                class="w-5 h-5 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    cx="15"
                                    cy="9"
                                    r="1"
                                    fill="currentColor"
                                ></circle>
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M12 4.75H19.25V12L12.5535 18.6708C11.7544 19.4668 10.4556 19.445 9.68369 18.6226L5.28993 13.941C4.54041 13.1424 4.57265 11.8895 5.36226 11.1305L12 4.75Z"
                                ></path>
                            </svg>
                        </div>
                        <a
                            href="#"
                            class="
                                text-xs
                                inline-block
                                border border-transparent
                                w-full
                                text-gray-500
                                pl-8
                                pr-4
                                py-2
                                hover:bg-gray-800
                                rounded
                                hover:text-gray-400 hover:border-gray-400
                            "
                            >Market & sell</a
                        >
                    </li>

                    <li class="text-gray-500 relative hover:text-white">
                        <div class="absolute flex items-center inset-y-0 pl-2">
                            <svg
                                class="w-5 h-5 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M5.75 19.2502H6.25C6.80229 19.2502 7.25 18.8025 7.25 18.2502V15.75C7.25 15.1977 6.80229 14.75 6.25 14.75H5.75C5.19772 14.75 4.75 15.1977 4.75 15.75V18.2502C4.75 18.8025 5.19772 19.2502 5.75 19.2502Z"
                                ></path>
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M11.75 19.2502H12.25C12.8023 19.2502 13.25 18.8025 13.25 18.2502V12.75C13.25 12.1977 12.8023 11.75 12.25 11.75H11.75C11.1977 11.75 10.75 12.1977 10.75 12.75V18.2502C10.75 18.8025 11.1977 19.2502 11.75 19.2502Z"
                                ></path>
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M17.75 19.2502H18.25C18.8023 19.2502 19.25 18.8025 19.25 18.2502V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H17.75C17.1977 4.75 16.75 5.19772 16.75 5.75V18.2502C16.75 18.8025 17.1977 19.2502 17.75 19.2502Z"
                                ></path>
                            </svg>
                        </div>
                        <a
                            href="#"
                            class="
                                text-xs
                                inline-block
                                border border-transparent
                                w-full
                                text-gray-500
                                pl-8
                                pr-4
                                py-2
                                hover:bg-gray-800
                                rounded
                                hover:text-gray-400 hover:border-gray-400
                            "
                            >Reporting</a
                        >
                    </li>

                    <li class="text-gray-500 relative hover:text-white">
                        <div class="absolute flex items-center inset-y-0 pl-2">
                            <svg
                                class="w-5 h-5 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="7.25"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                ></circle>
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="3.25"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                ></circle>
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M7 17L9.5 14.5"
                                ></path>
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M17 17L14.5 14.5"
                                ></path>
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M9.5 9.5L7 7"
                                ></path>
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M14.5 9.5L17 7"
                                ></path>
                            </svg>
                        </div>
                        <a
                            href="#"
                            class="
                                text-xs
                                inline-block
                                border border-transparent
                                w-full
                                text-gray-500
                                pl-8
                                pr-4
                                py-2
                                hover:bg-gray-800
                                rounded
                                hover:text-gray-400 hover:border-gray-400
                            "
                            >Support</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
