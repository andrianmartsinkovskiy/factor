import c from './style.module.css'
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBarItem = ({percentage, title}) => {

  return (
    <div className={c.wrap}>
      <CircularProgressbar styles={buildStyles({
        pathColor: "#E2414E"
      })} className={c.bar} strokeWidth={5} value={percentage} text={``} />
      <div className={c.title}>{title}</div>
    </div>
  )
}

export {
  ProgressBarItem
}
