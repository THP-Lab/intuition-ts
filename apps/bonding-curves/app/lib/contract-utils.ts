import { parseEther } from 'viem'

export interface ConstructorArg {
  name: string
  type: string
  internalType?: string
}

export interface ConstructorArgs {
  args: ConstructorArg[]
  values: Record<string, string>
}

export function parseConstructorArgs(abi: any[]): ConstructorArg[] {
  const constructor = abi.find((item) => item.type === 'constructor')
  return constructor?.inputs || []
}

export function formatConstructorValues(values: Record<string, string>): string {
  return Object.entries(values)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ')
}

export function prepareConstructorArgs(
  args: ConstructorArg[],
  values: Record<string, string>
): any[] {
  return args.map((arg) => {
    const value = values[arg.name]
    if (arg.type === 'uint256' || arg.type.startsWith('uint')) {
      // Handle ETH values (18 decimals) vs regular uint values
      return arg.name.toLowerCase().includes('eth')
        ? parseEther(value)
        : BigInt(value)
    }
    return value
  })
} 