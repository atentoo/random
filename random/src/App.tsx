import { useState } from 'react'
import { Card, Button, Typography } from '@gobolt/genesis'

function App() {
  const [pic, setPic] = useState("Select a Button");
  const handleClick = (newPic: any) => {
    setPic(newPic)
  };
  return (
    <>
      <Card
        style={{
          width: 500,
          margin: '0 auto',
          textAlign: 'center',
        }}

        actions={[
          <Button themeType="primary" onClick={() => handleClick(<img src="https://media.tenor.com/CJAzSgd6Vu8AAAAe/cute-cat-cat.png" />)}>happy cat</Button>,
          <Button themeType="secondary" onClick={() => handleClick(<img src="https://cdn-useast1.kapwing.com/static/templates/crying-cat-meme-template-full-719a53dc.webp" style={{maxHeight: '200px'}} />)}>sad cat</Button>,
          <Button themeType="tertiary" onClick={() => handleClick(<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBWB76EZKUgHdARYa-XNyIzoiJiUiyKiFrg&s" />)}>?</Button>,
        ]}
      >
        <div>
        <Typography
          themeType='secondary'
          variant='display1'
          style={{ textAlign: 'center', paddingBottom: '20px' }}
            >Pick a cat</Typography>
          <Typography variant="heading3">{pic}</Typography>
        </div>
      </Card>
    </>
  )
}


export default App
