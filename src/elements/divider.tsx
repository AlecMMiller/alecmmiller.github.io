interface IDividerProps {
    title: string
    conclusion: boolean
}

export function SectionTitle(props: IDividerProps) {
    const titleString = `<${(props.conclusion ? '/' : '')}${props.title}>`
    return <h1 className="Divider">{titleString}</h1>
}