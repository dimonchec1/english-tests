import { PageContent } from "@/features/layouts/PageContent"
import { UserLayout } from "@/features/layouts/UserLayout"
import { ContentHeader } from "@/shared/ui/headers/ContentHeader"
import { api } from "@/utils/api"
import { useRouter } from "next/router"
import { useSession } from 'next-auth/react';
import { InputWithLabel } from "@/shared/ui/inputs/inputWithLabel/InputWithLabel"
import { ActionButton } from "@/entities/buttons/ActionButton"
import { Label } from "@/shared/ui/label/Label"
import { MuiFileInput } from "mui-file-input"
import { useState } from "react"

const Profile = () => {
    const session = useSession()
    const [file, setFile] = useState<File | null>(null)

    const handleChange = (newFile: File | null) => {
      setFile(newFile)
    }
    if (!session.data?.user.email) {
        return <div>Loading...</div>
    }

    return (
        <UserLayout>
            <PageContent>
                <ContentHeader title={`Профиль`} />
                <div className="mb-2">
                    <Label>
                        Аватарка
                    </Label>
                </div>
                <MuiFileInput 
                    size='small'
                    about="asdf" 
                    getInputText={() =>'Выберите файл'} 
                    value={file} 
                    onChange={handleChange} 
                />
                <div className='space-y-4'>
                    <InputWithLabel
                        labelText='Имя'
                    />
                    <InputWithLabel
                        labelText='Фамилия'
                    />
                    <InputWithLabel
                        labelText='Email'
                    />
                </div>
                <ActionButton className='mt-6'>
                    Сохранить изменения
                </ActionButton>
            </PageContent>
        </UserLayout>
    )
}

export default Profile