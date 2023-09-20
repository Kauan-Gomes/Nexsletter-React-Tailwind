import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react"

export default function ToogleTheme() {
    const pageClasses = document.documentElement.classList

    //APi propria do navegador que identifica se o usuário está usando modo dark no sistema operacional, retorna true or false
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches

    useEffect(() => {
        systemPreference && pageClasses.add('dark')
    })

    const toggle = () => {

        pageClasses.toggle('dark')
    }

    return (
        <div className="hidden sm:block">
            <MoonIcon className="text-gray-100 h-8 block dark:hidden cursor-pointer" onClick={toggle} />
            <SunIcon className="h-8  text-gray-100 hidden dark:block cursor-pointer" onClick={toggle} />
        </div>
    )
}
