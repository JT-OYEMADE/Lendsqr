import Lists from './heroCard';
import { NavBar } from './Nav'
import Sidebar from './sidebar';
import '../style/card.scss'
import Tabl from './table';


export const Dashboard = () => {
  return (
    <div className='lendContainer'>
      <NavBar />
      <div className='dashContainer'>
        <Sidebar />
        <div className='dash'>
          <div className='dashUser'>Users</div>
          <Lists />
          <Tabl />
        </div>
      </div>
    </div>
  )
}