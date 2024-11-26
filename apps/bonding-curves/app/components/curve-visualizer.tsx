'use client'

import { useCallback, useEffect, useState } from 'react'

import { useFetcher } from '@remix-run/react'
import { createPublicClient, http, parseEther } from 'viem'
import { foundry } from 'viem/chains'

import { LineChart } from './ui/line-chart'
import {
  Alert,
  AlertDescription,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from './ui/ui-components'

interface Point {
  x: number
  y: number
}

export function CurveVisualizer() {
  const [file, setFile] = useState<File | null>(null)
  const [points, setPoints] = useState<Point[]>([])
  const [error, setError] = useState<string | null>(null)
  const fetcher = useFetcher()

  const publicClient = createPublicClient({
    chain: foundry,
    transport: http('http://localhost:8545'),
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.name.endsWith('.sol')) {
      setFile(file)
      setError(null)
      setPoints([]) // Reset points when file changes
    } else {
      setError('Please select a valid Solidity file')
    }
  }

  const compileAndDeploy = useCallback(async () => {
    if (!file) return

    try {
      // Read file content
      const content = await file.text()

      // Create form data
      const formData = new FormData()
      formData.append('file', file)
      formData.append('content', content)

      // Submit to Remix action
      fetcher.submit(formData, {
        method: 'post',
        action: '/api/compile-and-deploy',
        encType: 'multipart/form-data',
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    }
  }, [file, fetcher])

  // Handle fetcher state changes
  const isCompiling = fetcher.state === 'submitting'

  // Generate curve points when contract is deployed
  const generateCurvePoints = useCallback(
    async (address: string) => {
      const points: Point[] = []
      const numPoints = 100
      const maxValue = parseEther('10')

      for (let i = 0; i <= numPoints; i++) {
        const assets = (BigInt(i) * maxValue) / BigInt(numPoints)
        try {
          const shares = await publicClient.readContract({
            address: address as `0x${string}`,
            abi: [
              {
                inputs: [
                  { name: 'assets', type: 'uint256' },
                  { name: 'totalShares', type: 'uint256' },
                  { name: 'totalAssets', type: 'uint256' },
                ],
                name: 'assetsToShares',
                outputs: [{ name: 'shares', type: 'uint256' }],
                stateMutability: 'view',
                type: 'function',
              },
            ],
            functionName: 'assetsToShares',
            args: [assets, 0n, 0n], // Initial state
          })

          points.push({
            x: Number(assets) / 1e18, // Convert to ETH
            y: Number(shares) / 1e18, // Convert to ETH
          })
        } catch (err) {
          console.error('Error calling contract:', err)
        }
      }

      return points
    },
    [publicClient],
  )

  // Use useEffect to handle fetcher data changes
  useEffect(() => {
    const fetcherData = fetcher.data as
      | { address?: string; error?: string }
      | undefined

    if (fetcherData?.error) {
      setError(fetcherData.error)
    } else if (fetcherData?.address && points.length === 0) {
      generateCurvePoints(fetcherData.address).then(setPoints)
    }
  }, [fetcher.data, generateCurvePoints, points.length])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Bonding Curve Visualizer</CardTitle>
        <CardDescription>
          Upload a Solidity file containing a bonding curve implementation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="curve-file">Curve Implementation</Label>
          <Input
            id="curve-file"
            type="file"
            accept=".sol"
            onChange={handleFileChange}
          />
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Button
          onClick={compileAndDeploy}
          disabled={!file || isCompiling}
          className="w-full"
        >
          {isCompiling ? 'Compiling & Deploying...' : 'Visualize Curve'}
        </Button>

        {points.length > 0 && (
          <div className="h-[400px] w-full">
            <LineChart
              data={points}
              xLabel="Assets (ETH)"
              yLabel="Shares (ETH)"
              title="Bonding Curve"
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
