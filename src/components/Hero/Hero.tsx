import { useEffect, useState } from 'react'
import { Slide } from './Slide/Slide'
import { getSales } from '../../api/api'
import { SalesResult } from '../../api/api.props'

export const Hero = () => {
  const [sales, setSales] = useState<SalesResult[]>([])

  useEffect(() => {
    getSales().then((result) => setSales(result))
  }, [])

  return <Slide sales={sales} />
}
