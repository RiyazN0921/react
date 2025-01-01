function Forms() {
    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault()
        alert('form submitted successfully')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="enter your name"></input>
                <button>Click Me</button>
            </form>
        </>
    )
}

export default Forms