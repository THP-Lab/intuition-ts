import * as React from 'react'

import { QuestCriteriaDisplay, QuestPointsDisplay } from 'components'
import { QuestStatusIndicator } from 'components/QuestStatusIndicator'
import { Text } from 'components/Text'
import { cn } from 'styles'
import { QuestCriteriaStatusType, QuestStatus, QuestStatusType } from 'types'

import { QuestCardButton } from './components'

export interface QuestCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  title: string
  description: string
  questStatus: QuestStatusType
  label: string
  points: number
  questCriteria: string
  questCriteriaStatus: QuestCriteriaStatusType
}

const QuestCard = ({
  imgSrc,
  title,
  description,
  questStatus,
  label,
  points,
  questCriteria,
  questCriteriaStatus,
  ...props
}: QuestCardProps) => {
  return (
    <div
      className={cn(
        'flex items-stretch theme-border rounded-lg overflow-hidden relative h-full',
        questStatus === QuestStatus.disabled && 'opacity-70',
      )}
      {...props}
    >
      <div
        className="w-52 h-52 flex-shrink-0 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <div className="absolute top-2.5 left-2.5">
          <Text
            variant="body"
            className="text-foreground/70 bg-background/70 backdrop-blur-md px-2 py-1 rounded-md theme-border"
          >
            {label}
          </Text>
        </div>
        <div className="w-full h-full bg-cover bg-center border-r border-border/10"></div>
      </div>
      <div className="flex flex-col justify-center -ml-[29px] z-10">
        <QuestStatusIndicator status={questStatus} />
      </div>
      <div className="flex-1 flex flex-col justify-between p-6">
        <div className="space-y-2.5">
          <Text variant="headline" weight="normal">
            {title}
          </Text>
          <Text
            variant="bodyLarge"
            weight="normal"
            className="text-foreground/70"
          >
            {description}
          </Text>
        </div>
        <QuestCriteriaDisplay
          criteria={questCriteria}
          status={questCriteriaStatus}
        />
      </div>
      <div className="flex flex-col gap-2 items-center p-6">
        <QuestCardButton questStatus={questStatus} />
        <QuestPointsDisplay points={points} questStatus={questStatus} />
      </div>
    </div>
  )
}

export { QuestCard }
