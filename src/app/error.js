'use client'
import React from 'react';

const error = () => {
    return (
        <div>
         <h2>Something is worng</h2>
            <button onClick={()=>location.reload()}>Refrese</button>
        </div>
    );
};

export default error;