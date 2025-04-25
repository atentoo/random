import { useState } from 'react'
import { Card, Button, Typography, Tooltip, Popover, Toast } from '@gobolt/genesis'
import { GENESIS } from '@gobolt/genesis'

function App() {
  const [pic, setPic] = useState<keyof typeof pics | null>(null);
  const pics: Record<any, { src: any }> = {
    happy: {
      src: "https://media.tenor.com/CJAzSgd6Vu8AAAAe/cute-cat-cat.png"
    },
    sad: {
      src: "https://cdn-useast1.kapwing.com/static/templates/crying-cat-meme-template-full-719a53dc.webp"
    },
    mystery: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBWB76EZKUgHdARYa-XNyIzoiJiUiyKiFrg&s"
    }
  };

  const [showPopover, setShowPopover] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const toast = () => {
    setShowToast(false);
  }

  return (
    <>
      {showToast && <Toast state="success" message="Cats were reset!" close={toast} />}
      <Card
        style={{
          width: 500,
          margin: '0 auto',
          textAlign: 'center',
        }}

        actions={[
          <Button themeType="primary" onClick={() => setPic("happy")}>happy cat</Button>,
          <Button themeType="secondary" onClick={() => setPic("sad")}>sad cat</Button>,
          <Tooltip tip="What's this?">
            <Button themeType="tertiary" onClick={() => setPic("mystery")}>?</Button>
          </Tooltip>,
        ]}
      >
        <div>
          <Typography themeType="secondary" variant='heading1' style={{ marginBottom: '20px' }}>Click a Button</Typography>
          {pic && (
            <img src={pics[pic].src} style={{ maxHeight: '200px' }} />
          )}
        </div>
      </Card>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Popover
          placement="bottom"
          title={"Are you sure you want to reset?"}
          onOpenChange={visible => {
            setShowPopover(visible);
            if (!visible) {
              setPic(null);
              setShowToast(true);
            }
          }}>
          <div style={{
            width: 400,
            display: "flex",
            flexDirection: "column",
            position: "relative"
          }} />
          <Button themeType='destructive'>Reset</Button>
        </Popover>

      </div>
    </>
  )
}


export default App
