import React from 'react';
import { MailOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
function MYButton() {
  return (
    <div>
     <Button className="bg-blue-500 text-white">
      <MailOpen /> Login with Email
    </Button>
    </div>
  )
}

export default MYButton;


