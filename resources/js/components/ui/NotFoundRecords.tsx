interface NotFoundRecordsProps
{
    text: string
}

export default function NotFoundRecords({text}: NotFoundRecordsProps)
{
    return (
        <p className="text-center h6">{text}</p>
    )
}
