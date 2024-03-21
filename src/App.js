import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState('## markdown preview')
  return <main>
    <section className="martkdown"></section>
  </main>
}

export default App
