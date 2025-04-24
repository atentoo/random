
import { Card, Button, THEME, GENESIS } from '@gobolt/genesis'
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'


function App() {
  
  return (
    <>
      <Card
    style={{ width: 500}}
    actions={[
        <Button themeType="primary">funny quote</Button>,
        <Button themeType="secondary">sad quote</Button>,
        <Button themeType="tertiary">meme</Button>,
    ]}
    >
      <div>
          A slot to add any component or provide text like a product description
      </div>
      </Card>
  </>
  )
}


export default App
