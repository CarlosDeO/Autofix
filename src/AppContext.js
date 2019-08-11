import React from 'react'

const AppContext = React.createContext({
    username: '',
    password: '',
    cars: [],
    fixes: [],
    selectedCar: '',
    selectedFix: ''
})

export default AppContext;