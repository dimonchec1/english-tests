
import { api } from '@/utils/api';
import { useRouter } from 'next/router';
const Test = () => {
    const router = useRouter()
    const {test: testId} = router.query

    if (!testId) {
        return (
            <h1 className='text-3xl font-bold'>
                Loading...
            </h1>
        )
    }

    const {data: testTemplate} = api.test.testTemplate.useQuery({testTemplateId: typeof testId![0] === 'string' ? testId![0] : ''})
    const {data: testTemplates} = api.test.testTemplates.useQuery()
    
    return (
        <div className='flex gap-4'>
            <div className='w-40'>
                {
                    testTemplates?.map(testTemplate => (
                        <div 
                            onClick={() => router.push(testTemplate.id)}
                            className='text-blue-600 hover:text-blue-400 cursor-pointer'
                        >
                            {testTemplate.name}
                        </div>
                    )) 
                }
            </div>
            <h1 className='text-3xl font-bold'>
                {testTemplate?.name}
            </h1>
        </div>
       
    )
}

export default Test