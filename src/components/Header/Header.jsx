import ToogleTheme from "../ToogleTheme/ToogleTheme";




export default function Header() {
    return (
        <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
            <span className="text-gray-100">Olá, usuário</span>
            <h1 className="text-gray-100 text-xl ">Alura newsletter</h1>
            <ToogleTheme />
        </div>
    )
}