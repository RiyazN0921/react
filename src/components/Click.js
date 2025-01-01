function Clicks() {
    const onOpen = () => {
        window.open('http://localhost:3000')
    }

    const onClose = () => {
        window.close()
    }
    return (
        <>
            <button onClick={onOpen}>open</button>
            <button onClick={onClose}> close</button>
        </>
    )
}

export default Clicks