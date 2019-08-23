import React from "react"

const Contact = () => {
  const links = [
    {
      title: 'Github',
      url: 'https://www.github.com/emjames'
    },
    {
      title: 'Telegram',
      url: 'https://telegram.me/jms55'
    },
    {
      title: 'Email',
      url: 'mailto:ej@emjames.com'
    },
    {
      title: 'CV',
      url: 'https://drive.google.com/open?id=1N8LmZhCSLh67-X-FyPZdVhuY7vw8WaQV'
    },
  ]
  return (
    <div id="Contact">
      {
        links.map(link => (
          <a style={{padding: '0.3em'}} href={link.url}>{link.title}</a>
        ))
      }

    </div>
  )
}

export default Contact