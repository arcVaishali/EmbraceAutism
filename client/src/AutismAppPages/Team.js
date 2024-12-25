import React from 'react'

const Team = () => {
    return (
        <div style={{ backgroundColor: "#0d87f430" }}>
            <div class="bg-[#0d87f400] py-24 sm:py-32" style={{ backgroundColor: "#0d87f40" }}>
                <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3" style={{ backgroundColor: "#0d87f40" }}>
                    <div class="max-w-2xl" style={{ backgroundColor: "#0d87f400" }}>
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600">We're the masterminds behind the digital canvas where neurodiversity flourishes- Embrace Autism. Our passion lies in not only creating a user-friendly platform but also in weaving together a virtual tapestry that resonates with every individual who walks this online path.</p>
                    </div>
                    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <li>
                            <div class="flex items-center gap-x-6" style={{ backgroundColor: "#0d87f400" }}>
                                <img class="h-16 w-16 rounded-full" src="https://avatars.githubusercontent.com/u/98754461?v=4" alt="" />
                                <div>
                                    <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Vaishali</h3>
                                    <p class="text-sm font-semibold leading-6 text-gray-600">Frontend and UI Developer</p>
                                    <a href="https://github.com/arcVaishali" class="text-sm font-semibold leading-6 text-indigo-600">arcVaishali</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="flex items-center gap-x-6" style={{ backgroundColor: "#0d87f400" }}>
                                <img class="h-16 w-16 rounded-full" src="https://avatars.githubusercontent.com/u/80088403?v=4" alt="" />
                                <div>
                                    <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Vaishnavi Kale</h3>
                                    <p class="text-sm font-semibold leading-6 text-gray-600">Fullstack Developer and ML Enthusiast</p>
                                    <a href="https://github.com/vaishnavi-3969" class="text-sm font-semibold leading-6 text-indigo-600">Vaishnavi-3969</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="flex items-center gap-x-6" style={{ backgroundColor: "#0d87f400" }}>
                                <img class="h-16 w-16 rounded-full" src="https://avatars.githubusercontent.com/u/132906704?v=4" alt="" />
                                <div>
                                    <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Tanishka Aswal</h3>
                                    <p class="text-sm font-semibold leading-6 text-gray-600">Frontend Developer, Designing and Writing </p>
                                    <a href="https://github.com/tanishkaaswal" class="text-sm font-semibold leading-6 text-indigo-600">tanishkaaswal</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="flex items-center gap-x-6" style={{ backgroundColor: "#0d87f400" }}>
                                <img class="h-16 w-16 rounded-full" src="https://avatars.githubusercontent.com/u/71759025?v=4" alt="" />
                                <div>
                                    <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Kesav Nagendra</h3>
                                    <p class="text-sm font-semibold leading-6 text-gray-600">ML Engineer, IoT Enthusiast</p>
                                    <a href="https://github.com/kesavn-13" class="text-sm font-semibold leading-6 text-indigo-600">kesavn-13</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>


    )
}

export default Team