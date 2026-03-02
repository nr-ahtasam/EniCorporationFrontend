"use client"
import React from 'react'   

const textTest = () => {
  return (
    <div className=' flex flex-col justify-center items-center text-red-600  '>
{/* Normal styles */}
<h1 className="font-albert font-thin">Thin (100)</h1>
<h1 className="font-albert font-extralight">Extra Light (200)</h1>
<h1 className="font-albert font-light">Light (300)</h1>
<h1 className="font-albert font-normal">Normal (400)</h1>
<h1 className="font-albert font-medium">Medium (500)</h1>
<h1 className="font-albert font-semibold">Semibold (600)</h1>
<h1 className="font-albert font-bold">Bold (700)</h1>
<h1 className="font-albert font-extrabold">Extra Bold (800)</h1>
<h1 className="font-albert font-black">Black (900)</h1>

{/* Italic styles */}
<p className="font-albert font-thin italic">Thin Italic</p>
<p className="font-albert font-bold italic">Bold Italic</p>
<p className="font-albert font-black italic">Black Italic</p>

    </div>
  )
}

export default textTest