import { Test, TestCard } from '@/entities/testCard/TestCard'
import { Editable } from '@/entities/wrappers/Editable'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

interface TestListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tests: Test[]
}

const TestList: FC<TestListProps> = (
    {
        tests,
        className,
        ...props
    }
) => {
    const router = useRouter()
    return (
        <div 
            className={clsx(
                'grid grid-cols-1 gap-4',
                className
            )}
            {...props}
        >
            {
                tests.map(test => (
                    <Editable>
                        {
                            editable => (
                                <TestCard
                                    editable={editable}
                                    onClick={() => router.push({
                                        pathname: '/tests/[pid]',
                                        query: { pid: test.id },
                                      })}
                                    {...test}
                                />
                            )
                        }
                    </Editable>
                   
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