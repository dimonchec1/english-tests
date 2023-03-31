import { FC } from "react"
import { clsx } from 'clsx';
import { TextEditable } from "@/features/inputEditable/TextEditable";

interface Test {
    id: string
    name: string
    author: string
}

interface TestCardProps extends Test{
    editable: boolean
    onClick: () => void
}

const TestCard: FC<TestCardProps> = (
    {
        name,
        author,
        onClick,
        editable
    }
) => {
    return (
        <div 
            className={clsx(
                "grid grid-rows-testcard h-24 rounded px-2 pt-1",
                {'gap-1': editable}
            )}
            style={{
                boxShadow: "rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px"
            }}
            onClick={onClick}
        >
            <TextEditable 
                className='font-semibold text-lg' 
                editable={editable} 
                value={name} 
                onChange={() => {}}
            />
            <TextEditable 
                className='text-sm' 
                editable={editable} 
                value={author} 
                onChange={() => {}}
            />
        </div>
    )
}

export {
    TestCard
}

export type {
    Test
}