import c from './style.module.css'
import {ContentList} from "./components/content-list";
import {ContentInfo} from "./components/content-info";


const Content = () => {

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <ContentList />
        <ContentInfo />
      </div>
    </div>
  )
}

export {
  Content
}