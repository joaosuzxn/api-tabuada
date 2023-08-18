const tabuada = (req, res)=>{
    const {numero} = req.params
    const arr = []
    for(i = 0; i<=10; i++){
        arr.push(i*numero)
    }
    return res.status(200).json(arr)
}

module.exports = {
    tabuada
}