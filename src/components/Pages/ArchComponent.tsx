import React from 'react'
import ArchiveCard from '../Card/ArchiveCard'
import { archComponentCardData } from '../../data/ArchComponentCardData'
import useResponsiveWidth from '../hooks/useResponsiveStyles'

const ArchComponent = () => {
  const windowWidth = useResponsiveWidth()
  const screenToSmall = windowWidth < 1040
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        backgroundColor: '#F0F0F0',
        padding: '16px',
        justifyContent: 'center',
        paddingTop: screenToSmall ? '120px' : '150px',
        paddingBottom: '150px'
      }}
    >
      {archComponentCardData.map((card) => (
        //@ts-ignore
        <ArchiveCard key={card.id} {...card} />
      ))}
    </div>
  )
}

export default ArchComponent
