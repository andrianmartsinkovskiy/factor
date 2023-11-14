import c from './style.module.css'
import {ProgressBarItem} from "../progress-bar-item";

const ListItem = ({item}) => {

  return (
    <div className={c.wrap}>
      <div className={c.left}>
        <div>
          <span className={c.index}>{item.index + 1}</span>
        </div>
        <div>
          <img className={c.title} src={item.logo} alt=""/>
        </div>
        <div className={c.names}>
          <h5 className={c.nameTitle}>{item.title}</h5>
          <p className={c.nameSubtitle}>{item.subtitle}</p>
        </div>
      </div>

      <div className={c.right}>
        <ProgressBarItem percentage={Math.random() * 100} title="LVG" />
        <ProgressBarItem percentage={Math.random() * 100} title="LVG" />
        <ProgressBarItem percentage={Math.random() * 100} title="LVG" />
        <ProgressBarItem percentage={Math.random() * 100} title="LVG" />
        <ProgressBarItem percentage={Math.random() * 100} title="LVG" />
      </div>
    </div>
  )
}

export {
  ListItem
}