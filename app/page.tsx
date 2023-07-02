import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import data from '@/data/resources.json'

import Link from 'next/link'

export default function Home() {
  const resources = Object.entries(data.resources)

  return (
    <section className='max-w-7xl m-auto py-8 px-2 sm:px-4 lg:px-8'>
      <h3 className='text-xl text-rose-500 mb-4'>Resources</h3>
      <div>
        {resources.map(([category, resources]) => (
          <div key={category}>
            <h4 className='text-lg mb-4'>{category.substring(0, 1).toUpperCase() + category.substring(1)}</h4>
            <ul className='flex flex-wrap gap-8 columns-3'>
              {resources.map((resource) => (
                <li key={resource.name} className='min-w-[25%] max-w-xs'>
                  <Card className='p-8'>
                    <CardContent>
                      <CardTitle className='mb-4'>{resource.name}</CardTitle>
                      <CardDescription className='mb-4'>{resource.description}</CardDescription>
                      <Link href={resource.url} className='mt-8'><Button className='mb-0'>Visit Page</Button></Link>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
