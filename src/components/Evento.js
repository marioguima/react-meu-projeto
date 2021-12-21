import Button from "./evento/Button"

function Evento() {

    function primeiroEvento() {
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento() {
        console.log(`Ativando segundo evento!`)
    }

    return (
        <>
            <p>Clique para disparar um evento:</p>
            <Button event={primeiroEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </>
    )

}

export default Evento