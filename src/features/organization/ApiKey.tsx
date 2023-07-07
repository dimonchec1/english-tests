import { ActionButton } from "@/entities/buttons/ActionButton"
import { CategoryHeader } from "@/shared/ui/headers/CategoryHeader"
import { InputWithLabel } from "@/shared/ui/inputs/inputWithLabel/InputWithLabel"
import { Label } from "@/shared/ui/label/Label"
import { api } from "@/utils/api"
import { useState } from "react"


const ApiKey = () => {
    const [token, setToken] = useState<string>()
    const {mutateAsync: generateToken} = api.organization.generateApiToken.useMutation()

    const generateApiToken = async (organizationId: string) => {
        const token = await generateToken({organizationId})
    
        return token
    }

    const handleGenerateApiToken = async () => {
        //TODO: organizationId
        const newToken = await generateApiToken('organizationId')
        setToken(newToken)
    }

    return (
        <div className='space-y-2'>
            <CategoryHeader title='Api доступ' />
            {
                token ? (
                    <InputWithLabel
                        labelText='Api токен, необходимый для программного доступа к сервису мероприятий'
                        value={"a8441e012daa646e972c924fd9dbd98e1d3b565c4d781719feecf4e2df5be2d6"}
                    />
                ) : (
                    <>
                        <Label>
                            Api токен, необходимый для программного доступа к сервису мероприятий
                        </Label>
                        <div>Сохраните токен, он не будет показан снова из соображений безопасности!</div>
                    </>
                )
            }
            <ActionButton onClick={handleGenerateApiToken}>
                Сгенерировать новый Api токен
            </ActionButton>
        </div>
    )
}

export default ApiKey