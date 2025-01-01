function Inuputs() {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            alert('Enter Key is Pressed')
        }
    }
    return (
        <>
             <div>
                <input
                    type="text"
                    placeholder="Enter some text"
                    onKeyPress={handleKeyPress}  
                />
            </div>
        </>
    )
}

export default Inuputs