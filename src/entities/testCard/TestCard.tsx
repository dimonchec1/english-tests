import { FC } from "react"
import { clsx } from 'clsx';

interface Test {
    id: string
    name: string
    author: string
}

interface TestCardProps extends Test{
    onClick: () => void
}

const TestCard: FC<TestCardProps> = (
    {
        name,
        author,
        onClick
    }
) => {
    return (
        <div 
            className={clsx(
                "grid grid-rows-testcard h-24 rounded px-2 pt-1",
            )}
            style={{
                boxShadow: "rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px"
            }}
            onClick={onClick}
        >
            <p className='font-semibold text-lg'>{name}</p>
            <p className='text-sm'>{author}</p>
        </div>
    )
}

export {
    TestCard
}

export type {
    Test
}