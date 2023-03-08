import React, { useState } from 'react'
import SvgIcons from '../assests/svg/SvgIcons'


interface IProps  {
  firstName?: string;
  lastName?: string;
  accountNumber?: string;
  id?: string
  orgName?: string
  accountBalance?: string
}
export const Details: React.FC<IProps> = ({firstName, lastName, accountNumber, id, orgName, accountBalance}) => {
  const [active, setActive] = useState<number>();
  const activeClick = (id: number) => {
    setActive(1);
  };

  return (
    <div className='profileDetail'>
      <div className='profileDash'>
        <div className='nameIcon'>
          <SvgIcons.AvatarIcon />
        <div className='profileName'>
          <div>{firstName} {lastName}</div>
          <div>{id}</div>
        </div>
        </div>
        <div className='detailsBorder'></div>
        <div className='userTier'>
          <div>Users Tier</div>
          <SvgIcons.SStarIcon />
          <SvgIcons.StarIcon />
          <SvgIcons.StarIcon />
        </div>
        <div className='detailsBorder'></div>
        <div >
          <div className='userBal'>₦{accountBalance}</div>
          <div className='userAccBal'>{accountNumber}/{orgName}</div>
        </div>
      </div>
      <div className='profileTab'>
        <div onClick={() => activeClick(1)} style={active === 1 ? { borderBottom: '2px solid #39CDCC', width: '150px', paddingBottom: '7px', color: '#39CDCC' } : { borderBottom: 'none',  width: '170px', color: 'rgba(0, 0, 0, 0.8)' }} className='general'> General Details </div>
        <div onClick={() => activeClick(2)} style={active === 2 ? {  borderBottom: '2px solid #39CDCC', width: '150px', paddingBottom: '5px', color: '#39CDCC' } : {borderBottom: 'none', width: '170px', color: 'rgba(0, 0, 0, 0.8)' }} className='document'> Documents </div>
        <div onClick={() => activeClick(3)} style={active === 3 ? {  borderBottom: '2px solid #39CDCC',  width: '150px', paddingBottom: '5px', color: '#39CDCC' } : { borderBottom: 'none', width: '170px', color: 'rgba(0, 0, 0, 0.8)' }} className='bank'> Bank Details </div>
        <div onClick={() => activeClick(4)} style={active === 4 ? {  borderBottom: '2px solid #39CDCC',  width: '150px', paddingBottom: '5px', color: '#39CDCC' } : { borderBottom: 'none', width: '170px', color: 'rgba(0, 0, 0, 0.8)' }} className='loan'> Loans </div>
        <div onClick={() => activeClick(5)} style={active === 5 ? {  borderBottom: '2px solid #39CDCC',  width: '150px', paddingBottom: '5px', color: '#39CDCC' } : {borderBottom: 'none', width: '170px', color: 'rgba(0, 0, 0, 0.8)' }} className='saving'> Savings </div>
        <div onClick={() => activeClick(6)} style={active === 6 ? { borderBottom: '2px solid #39CDCC', width: '150px', paddingBottom: '5px', color: '#39CDCC' } : {borderBottom: 'none', width: '170px', color: 'rgba(0, 0, 0, 0.8)' }} className='appSystem'> App and System </div>
      </div>
    </div>
  )
};