import React, { Children } from 'react'

const AsideCategory = ({ children }) => {
    return (
        <div className="pl-4 pt-7">
            <h2 className="text-lg font-bold mb-2">{children}</h2>
        </div>
    );
};

export default AsideCategory
