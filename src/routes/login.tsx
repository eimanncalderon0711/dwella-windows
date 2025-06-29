import { createFileRoute } from '@tanstack/react-router'
import Login from '../pages/authentication/Login'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Login/>
}
