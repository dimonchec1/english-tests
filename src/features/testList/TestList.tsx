import { TestCard } from '@/entities/testCard/TestCard'
import { useRouter } from 'next/router'

const TestList = () => {
    const tests = [
        {id: '12312', name: 'Английский язык', author: 'Gorillaz inc'}, 
        {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
        {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
        {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
        {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
        {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
        {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
        {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
        {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
    ]
    const router = useRouter()
    return (
        <div className='grid grid-cols-1 gap-4'>
            {
                tests.map(test => (
                    <TestCard
                        onClick={() => router.push({
                            pathname: '/tests/[pid]',
                            query: { pid: test.id },
                            })}
                        {...test}
                    />
                ))
            }
        </div>
    )
}

// const getStaticProps = () => {
//     const tests = getTestsPreview()

//     return {
//         props: {
//             tests
//         }
//     }
// }

export {
    TestList,
    // getStaticProps
}