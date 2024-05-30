import { createContext } from "react";

import React from 'react'

const searchContext = createContext ({
    searchText: "",
    textLength: false,

})

export default searchContext