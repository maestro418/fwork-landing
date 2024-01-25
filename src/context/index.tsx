import React from "react";

interface ProviderProps {
    children: React.ReactNode
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
    return (
        <div>
            <h1>Hello world</h1>
            {children}
        </div>
    )
}

export default Provider