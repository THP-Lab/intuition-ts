import { useState } from 'react'

import {
  Button,
  ButtonSize,
  ButtonVariant,
  Dialog,
  DialogContent,
  Icon,
  IconName,
  Identity,
  IdentityTag,
  Trunctacular,
} from '@0xintuition/1ui'
import { GetAtomQuery } from '@0xintuition/graphql'

import { AtomSearchCombobox } from '@components/atom-search-combobox'
import { AtomSearchCombobox2 } from '@components/atom-search-combobox2'

export default function Combobox() {
  const [selectedAtom, setSelectedAtom] = useState<GetAtomQuery['atom'] | null>(
    null,
  )
  const [searchActive, setSearchActive] = useState(false)
  const [useCombobox2, setUseCombobox2] = useState(true)

  const onAtomSelect = (atom: GetAtomQuery['atom']) => {
    setSelectedAtom(atom)
    setSearchActive(false)
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-4">
      <Button
        variant={ButtonVariant.secondary}
        size={ButtonSize.md}
        onClick={() => setUseCombobox2(!useCombobox2)}
        className="mb-2"
      >
        Switch to {useCombobox2 ? 'Combobox 1' : 'Combobox 2'}
      </Button>

      <div className="relative">
        {selectedAtom ? (
          <IdentityTag
            size="lg"
            variant={Identity.nonUser}
            imgSrc={selectedAtom.image ?? ''}
            onClick={() => setSearchActive(true)}
          >
            <Trunctacular
              maxStringLength={20}
              variant="bodyLarge"
              value={selectedAtom?.label ?? ''}
              disableTooltip
            />
          </IdentityTag>
        ) : (
          <Button
            variant={ButtonVariant.secondary}
            size={ButtonSize.lg}
            onClick={() => setSearchActive(true)}
          >
            <Icon name={IconName.plusSmall} />
            Select an atom
          </Button>
        )}
        {useCombobox2 && searchActive && (
          <Dialog
            defaultOpen
            open={searchActive}
            onOpenChange={() => {
              setSearchActive(false)
            }}
          >
            <DialogContent
              onOpenAutoFocus={(event) => event.preventDefault()}
              className="p-0 max-w-2xl"
            >
              <AtomSearchCombobox2 onAtomSelect={onAtomSelect} />
            </DialogContent>
          </Dialog>
        )}
        {!useCombobox2 && searchActive && (
          <div className="absolute left-0 top-0 mt-0 w-[360px] z-50 bg-white rounded-md shadow-lg">
            <AtomSearchCombobox onAtomSelect={onAtomSelect} />
          </div>
        )}
      </div>
    </div>
  )
}
