import React from "react"
import { Image, Button } from "@nextui-org/react"
import { supabase } from "../../db/supabaseClient"

export const AdminButton = () => {
  const handlePress = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    })
  }

  return (
    <Button className="py-2 bg-transparent" onPress={handlePress}>
      <Image
        src="/assets/images/supabase-logo-icon.webp"
        alt="sponsors"
        width={32}
        height={32}
        isBlurred
      />
    </Button>
  )
}
