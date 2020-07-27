import React, { useState, useEffect } from 'react';

const People = ({info}) => {
   return (
        <div>
           {info.name}
           {info.height}
        </div>
    );
}
export default People;