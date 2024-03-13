import { ProfileSection } from "./profile-section"

export function Profile() {
  const userName = "Argarm"
  return (
    <div>
      <h1>Mi Perfil</h1>
      <ProfileSection userName={userName} name="Aarón García Marrero" />
    </div>
  )
}