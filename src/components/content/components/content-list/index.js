import c from './style.module.css'
import logo from '../../../../assets/images/nike-logo.png'
import {ListItem} from "../list-item";

const TEST_ITEMS = []

for (let i=0;i<10; i++) {
  TEST_ITEMS.push({
    index: i,
    title: "NKE",
    subtitle: "Nike, Inc.",
    logo: logo
  })
}

const ContentList = () => {

  return (
    <div color={c.wrap}>
      {
        TEST_ITEMS.map(item => (
          <ListItem key={item.index} item={item} />
        ))
      }
    </div>
  )
}

export {
  ContentList
}