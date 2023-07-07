import { ActionButton } from "@/entities/buttons/ActionButton"
import { InputWithLabel } from "@/shared/ui/inputs/inputWithLabel/InputWithLabel"
import { Label } from "@/shared/ui/label/Label"
import { Divider } from "@mui/material"
import Image from "next/image"

const CreateEventPage = () => {
    return (
        <>
            <div className='py-4 px-6'>
                <div className='flex'>
                    <div className=''>
                        <div className=' font-semibold text-3xl justify-between mr-8 mb-1'>

                            Экзамен по английскому языку
                        </div>
                        <div className='font-medium text-xl justify-between mr-8 mb-3'>

                            Проводит: Высшая школа экономики
                            </div>
                        <div className="flex items-center	">
                            <div className="mr-8 ">Длительность: 1 час</div>
                            <ActionButton>
                                Участвовать
                            </ActionButton>
                        </div>
                    </div>
                    <Image 
                        alt=""
                        width={120}
                        height={120}
                        src={'https://upload.wikimedia.org/wikipedia/ru/thumb/8/81/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9D%D0%98%D0%A3_%D0%92%D0%A8%D0%AD.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9D%D0%98%D0%A3_%D0%92%D0%A8%D0%AD.svg.png'}
                    />
                </div>
            </div>
            <Divider />
            <div className='py-4 px-6 space-y-4'>
                <div>

                    <Label>
                        <div>Пройдя сертификат, вы получите:</div>
                    </Label>
                    <div className='mt-2'>
                        Сертификат об успешном прохождении экзамена с электронной подписью
                    </div>
                </div>
                <div>
                      <Label>
                        <div>Об экзамене:</div>
                    </Label>
                        <div className='mt-2'>
                    В первый день сдается чтение, письмо и аудирование. На каждый раздел уйдет от часа до двух, в зависимости от уровня. Устная часть сдается отдельно и занимает около 15 минут. Эта часть экзамена обычно проводится совместно с другими студентами.
                    Задания проверяют умение полностью понимать прослушанный текст. Для их успешного выполнения нужно не просто понимать иноязычную речь на слух, но и уметь полно и точно воспринимать текст в целом, акцентируя внимание на деталях. Задания представляют собой вопросы или незавершенные утверждения, сформулированные на основе одного текста интервью, записанного на аудионоситель. В каждом задании необходимо найти один правильный ответ или подобрать одно правильное окончание из трех предложенных. В ответе надо записать только цифры, которые соотносятся с выбранными вариантами.
                    </div>
                </div>
                  
            </div>
        </>
    )
}

export default CreateEventPage