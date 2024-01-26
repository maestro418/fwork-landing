import React from "react";

interface ProviderProps {
    children: React.ReactNode
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Provider