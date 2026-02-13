import { useNavigate } from 'react-router-dom'
import { DashboardLayout } from './DashboardLayout'
import { StatusCard } from './components/StatusCard'
import { useSetupWizard } from '@/features/setup-wizard'
import { useFunding } from '@/features/funding/FundingContext'

export function DashboardPage(): React.JSX.Element {
  const navigate = useNavigate()
  const { data: setupData } = useSetupWizard()
  const { data: fundingData } = useFunding()

  const handleSetupCommunity = (): void => {
    void navigate('/setup-wizard/branding')
  }

  const handleEnableFunding = (): void => {
    void navigate('/funding/intro')
  }

  const cardProps = {
    title: 'Community status',
    subtitle: 'Role: Community owner',
    items: [
      {
        label: 'Community',
        value: 'The Commons Hub · mycommunity.commonshub.social',
      },
      {
        label: 'Hosting',
        value: 'Active · Managed by Commonshub',
      },
      {
        label: 'Members',
        value: '0 (expected)',
      },
    ],
    ...(!setupData.isComplete && {
      note: {
        label: 'Next',
        text: 'Run a 3-step setup (branding, purpose, welcome post). ~5 minutes.',
      },
    }),
    action: setupData.isComplete
      ? fundingData.isFundingComplete
        ? {
            label: 'Visit community funding page',
            onClick: () => {
              // TODO: Navigate to community funding page
            },
          }
        : {
            label: 'Enable community funding',
            onClick: handleEnableFunding,
          }
      : {
          label: 'Set up your community',
          onClick: handleSetupCommunity,
        },
  }

  return (
    <DashboardLayout>
      <section>
        <StatusCard {...cardProps} />
      </section>
    </DashboardLayout>
  )
}
