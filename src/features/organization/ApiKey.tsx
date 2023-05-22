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
        <div className='space-y-4'>
            <CategoryHeader title='Api доступ' />
            {
                token ? (
                    <InputWithLabel
                        labelText='Api токен, необходимый для программного доступа к сервису мероприятий'
                        value={token}
                    />
                ) : (
                    <Label>
                        Api токен, необходимый для программного доступа к сервису мероприятий
                    </Label>
                )
            }
            <ActionButton onClick={handleGenerateApiToken}>
                Сгенерировать новый Api токен
            </ActionButton>
        </div>
    )
}

export default ApiKey