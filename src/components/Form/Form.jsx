import Input from "../Input/Input"


export default function Form({onSubmit}) {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()

        const name = event.target[0].value
        const email = event.target[1].value

        onSubmit({name, event})
    }

  return (
    <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
        <Input type="text"  required placeholder="insira seu nome..."/>
        <Input type="email" required placeholder="insira seu email..."/>
        <button type="submit" className="w-full max-w-sm py-1 px-5 bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase dark:text-gray-200 hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black">Seguir</button>
    </form>
  )
}

