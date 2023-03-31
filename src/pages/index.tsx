import { type NextPage } from 'next';
import { TestList } from '@/features/testList/TestList';
import { ActionButton } from '@/entities/buttons/ActionButton';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const router = useRouter()

    return (
        <>
            <ActionButton 
                onClick={() => router.push('tests/create')}
                className='w-24'
            >
                Новый курс
            </ActionButton>
            <TestList 
                className='mt-4'
                tests={[
                    {id: '12312', name: 'Английский язык', author: 'Gorillaz inc'}, 
                    {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
                    {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
                    {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
                    {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
                    {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
                    {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
                    {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
                    {id: '213123', name: 'Машинное обучение', author: 'Николай Викторович'},
                ]} 
            />
        </>
    )
}

export default Home