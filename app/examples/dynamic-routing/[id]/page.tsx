"use client"

import { usePathname  } from "next/navigation"

const DynamicRouting = () => {
  const pathname = usePathname()
    
  return (
    <div>
            This is a Dynamic page with pathname = {pathname}
    </div>
  )
}

export default DynamicRouting