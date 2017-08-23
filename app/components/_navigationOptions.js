const defaultOptions = {
    headerStyle:{
        backgroundColor:'#7A7A7A'
    }
}

module.exports = {
    navigationOptions_set(headerTitile){
        let obj
        return obj = Object.assign({headerTitle:headerTitile},defaultOptions)
    }
}
