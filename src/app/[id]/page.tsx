'use client'
import { useParams } from 'next/navigation'

export default function PageId() {
  const { id } = useParams()
  return <h1>Page Id: {id}</h1>
}
