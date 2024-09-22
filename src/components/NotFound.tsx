import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-4">
      <div className='flex flex-col items-center'>
        <Icon icon="tabler:plane-off" className="text-9xl"/>
        <span className="text-5xl">404</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mt-5">
        <p className="font-bold text-3xl text-center">Oops! The page you're looking for doesn't exist.</p>
        <Button className="w-32" onClick={() => navigate('/')}>Home Page</Button>
      </div>
    </div>
  )
}

export default NotFound