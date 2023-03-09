import Lists from './heroCard';
import '../style/card.scss'
import Tabl from './table';


export const Dashboard = () => {
  return (
    <div className='lendContainer'>
        <div className='dash'>
          <div className='dashUser'>Users</div>
          <Lists />
          <Tabl />
        </div>
    </div>
  )
}