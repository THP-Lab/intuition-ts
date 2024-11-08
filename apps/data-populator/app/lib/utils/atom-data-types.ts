import {
  defaultCAIP10Data,
  defaultCAIP10Descriptions,
  defaultCSVData,
  defaultCSVDescriptions,
  defaultCSVValues,
  defaultURIData,
  defaultURIDescriptions,
} from './default-data'

export interface AtomDataType {
  name: string
  defaultData: string[][]
  defaultDescriptions: Record<string, string>
  defaultValues?: Record<string, string>
}

export const atomDataTypes: Record<string, AtomDataType> = {
  CSV: {
    name: 'Schema.org <Thing>',
    defaultData: defaultCSVData,
    defaultDescriptions: defaultCSVDescriptions,
    defaultValues: defaultCSVValues,
  },
  CAIP10: {
    name: 'CAIP-10',
    defaultData: defaultCAIP10Data,
    defaultDescriptions: defaultCAIP10Descriptions,
  },
  URI: {
    name: 'Raw URI',
    defaultData: defaultURIData,
    defaultDescriptions: defaultURIDescriptions,
  },
}

export type AtomDataTypeKey = keyof typeof atomDataTypes
