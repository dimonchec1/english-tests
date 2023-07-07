import { PageContent } from "@/features/layouts/PageContent"
import { ContentHeader } from "@/shared/ui/headers/ContentHeader"
import { MuiFileInput } from "mui-file-input"
import { useState } from "react"

const Verification = () => {
    const [file, setFile] = useState<File | null>(null)
    const [verificationResult, setVerificationResult] = useState<boolean>()

    const handleChange = async (newFile: File | null) => {
        setFile(newFile)
        if (!process.env.CERTIFICATION_URL || newFile == null) return
        const formData = new FormData() 
        formData.set('file', newFile)
        const response = await fetch(`${process.env.CERTIFICATION_URL}/verify`, {
            method: 'POST',
            body: formData
        })

        const data = await response.json()

        setVerificationResult(data)
    }

    return (
        <PageContent>
            <ContentHeader title='Добавьте документ для верификации' />
            <MuiFileInput 
                size='small'
                about='Сертифицированный файл'
                getInputText={() =>'Выберите файл'} 
                value={file} 
                onChange={handleChange} 
            />
            {verificationResult === true && <div className='text-green-500'>Сертификат действителен!</div>}
            {verificationResult === false && <div className='text-red-600'>Сертификат не действителен!</div>}
        </PageContent>
    )
}

export default Verification