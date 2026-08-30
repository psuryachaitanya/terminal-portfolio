import { ChatPanel } from './components/ChatPanel'
import { ProfilePanel } from './components/ProfilePanel'
import './styles/theme.css'
import './styles/profile.css'
import './styles/layout.css'
import './styles/chat.css'

export default function App() {
  return (
    <div className="app-layout">
      <ProfilePanel />
      <ChatPanel />
    </div>
  )
}
